// 全セクション対応管理画面JavaScript
let contentData = {};
let editingItem = { type: null, id: null, data: null };
let tempImages = {};

// 初期化
document.addEventListener('DOMContentLoaded', async () => {
    await loadContent();
    setupEventListeners();
    renderAllSections();
});

// コンテンツ読み込み
async function loadContent() {
    try {
        const response = await fetch('/api/content');
        contentData = await response.json();
    } catch (error) {
        console.error('読み込みエラー:', error);
        contentData = { hero: {}, vision: {}, profile: {}, policies: [], projects: [], reports: [], topics: [], activities: [], stats: {} };
    }
}

// イベントリスナー設定
function setupEventListeners() {
    // タブ切り替え
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(`${tab.dataset.tab}-panel`).classList.add('active');
        });
    });

    // 追加ボタン
    ['topic', 'activity', 'report'].forEach(type => {
        const btn = document.getElementById(`add-${type}-btn`);
        if (btn) btn.addEventListener('click', () => openEditModal(type));
    });

    // 保存ボタン
    document.getElementById('save-btn').addEventListener('click', saveAllContent);
    document.getElementById('save-edit-btn').addEventListener('click', saveEdit);

    // 画像アップロード
    ['hero', 'vision', 'profile'].forEach(section => {
        const input = document.getElementById(`${section}-image`);
        if (input) input.addEventListener('change', (e) => handleImageUpload(e, `${section}-image-preview`));
    });
}

// 全セクションレンダリング
function renderAllSections() {
    renderHero();
    renderVision();
    renderProfile();
    renderPolicies();
    renderProjects();
    renderReports();
    renderTopics();
    renderActivities();
    renderStats();
}

// ヒーローセクション
function renderHero() {
    const hero = contentData.hero || {};
    document.getElementById('hero-name').value = hero.name || '';
    document.getElementById('hero-nameKana').value = hero.nameKana || '';
    document.getElementById('hero-area').value = hero.area || '';
    document.getElementById('hero-slogan').value = hero.slogan || '';
    if (hero.image) showImagePreview('hero-image-preview', hero.image);
}

// 私の想い
function renderVision() {
    const vision = contentData.vision || {};
    document.getElementById('vision-title').value = vision.title || '';
    document.getElementById('vision-content').value = vision.content || '';
    if (vision.image) showImagePreview('vision-image-preview', vision.image);
}

// プロフィール
function renderProfile() {
    const profile = contentData.profile || {};
    document.getElementById('profile-name').value = profile.name || '';
    document.getElementById('profile-nameKana').value = profile.nameKana || '';
    document.getElementById('profile-party').value = profile.party || '';
    document.getElementById('profile-currentActivities').value = profile.currentActivities || '';
    document.getElementById('profile-background').value = profile.background || '';
    document.getElementById('profile-family').value = profile.family || '';
    document.getElementById('profile-motto').value = profile.motto || '';
    if (profile.image) showImagePreview('profile-image-preview', profile.image);
}

// 政策
function renderPolicies() {
    const list = document.getElementById('policies-list');
    const policies = contentData.policies || [];
    list.innerHTML = policies.map((policy, index) => `
        <div class="item-card">
            <div class="item-content">
                <div class="item-meta">
                    <span class="item-category">政策${policy.id}</span>
                </div>
                <h3 class="item-title">${policy.title}</h3>
                <p class="item-description">${policy.description}</p>
                ${policy.image ? `<img src="${policy.image}" class="item-image-thumb">` : ''}
            </div>
            <div class="item-actions">
                <button class="btn-icon btn-edit" onclick="editPolicy(${index})" title="編集">✏️</button>
            </div>
        </div>
    `).join('');
}

function editPolicy(index) {
    const policy = contentData.policies[index];
    editingItem = { type: 'policy', id: index, data: policy };
    
    const body = document.getElementById('edit-modal-body');
    body.innerHTML = `
        <div class="form-group">
            <label>タイトル</label>
            <input type="text" id="edit-title" class="form-input" value="${policy.title}">
        </div>
        <div class="form-group">
            <label>説明</label>
            <textarea id="edit-description" class="form-textarea" rows="3">${policy.description}</textarea>
        </div>
        <div class="form-group">
            <label>具体的な取り組み（1行1項目）</label>
            <textarea id="edit-items" class="form-textarea" rows="5">${(policy.items || []).join('\n')}</textarea>
        </div>
        <div class="form-group">
            <label>画像</label>
            <input type="file" id="edit-image" accept="image/*" class="form-input">
            ${policy.image ? `<img src="${policy.image}" style="max-width: 200px; margin-top: 10px;">` : ''}
        </div>
    `;
    
    document.getElementById('edit-modal-title').textContent = '政策を編集';
    document.getElementById('edit-modal').classList.add('active');
    
    document.getElementById('edit-image').addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (file) tempImages.edit = await fileToBase64(file);
    });
}

// プロジェクト
function renderProjects() {
    const list = document.getElementById('projects-list');
    const projects = contentData.projects || [];
    list.innerHTML = projects.map((project, index) => `
        <div class="item-card">
            <div class="item-content">
                <div class="item-meta">
                    <span class="item-category">プロジェクト${project.id}</span>
                </div>
                <h3 class="item-title">${project.title}</h3>
                <p class="item-description">${project.description}</p>
            </div>
            <div class="item-actions">
                <button class="btn-icon btn-edit" onclick="editProject(${index})" title="編集">✏️</button>
            </div>
        </div>
    `).join('');
}

function editProject(index) {
    const project = contentData.projects[index];
    editingItem = { type: 'project', id: index, data: project };
    
    const body = document.getElementById('edit-modal-body');
    body.innerHTML = `
        <div class="form-group">
            <label>タイトル</label>
            <input type="text" id="edit-title" class="form-input" value="${project.title}">
        </div>
        <div class="form-group">
            <label>説明</label>
            <textarea id="edit-description" class="form-textarea" rows="5">${project.description}</textarea>
        </div>
    `;
    
    document.getElementById('edit-modal-title').textContent = 'プロジェクトを編集';
    document.getElementById('edit-modal').classList.add('active');
}

// レポート
function renderReports() {
    const list = document.getElementById('reports-list');
    const reports = contentData.reports || [];
    list.innerHTML = reports.map((report, index) => `
        <div class="item-card">
            <div class="item-content">
                <div class="item-meta">
                    <span class="item-date">${formatDate(report.date)}</span>
                </div>
                <h3 class="item-title">${report.title}</h3>
                <p class="item-description">${report.description}</p>
                ${report.image ? `<img src="${report.image}" class="item-image-thumb">` : ''}
            </div>
            <div class="item-actions">
                <button class="btn-icon btn-edit" onclick="editReport(${index})" title="編集">✏️</button>
                <button class="btn-icon btn-delete" onclick="deleteReport(${index})" title="削除">🗑️</button>
            </div>
        </div>
    `).join('') || '<p style="text-align:center;padding:2rem;color:#999;">レポートがありません</p>';
}

function editReport(index) {
    const report = index !== undefined ? contentData.reports[index] : null;
    editingItem = { type: 'report', id: index, data: report };
    
    const body = document.getElementById('edit-modal-body');
    body.innerHTML = `
        <div class="form-group">
            <label>日付</label>
            <input type="date" id="edit-date" class="form-input" value="${report?.date || new Date().toISOString().split('T')[0]}">
        </div>
        <div class="form-group">
            <label>タイトル</label>
            <input type="text" id="edit-title" class="form-input" value="${report?.title || ''}">
        </div>
        <div class="form-group">
            <label>説明</label>
            <textarea id="edit-description" class="form-textarea" rows="4">${report?.description || ''}</textarea>
        </div>
        <div class="form-group">
            <label>画像</label>
            <input type="file" id="edit-image" accept="image/*" class="form-input">
            ${report?.image ? `<img src="${report.image}" style="max-width: 200px; margin-top: 10px;">` : ''}
        </div>
        <div class="form-group">
            <label>PDF URL（任意）</label>
            <input type="text" id="edit-pdfUrl" class="form-input" value="${report?.pdfUrl || '#'}">
        </div>
    `;
    
    document.getElementById('edit-modal-title').textContent = report ? 'レポートを編集' : 'レポートを追加';
    document.getElementById('edit-modal').classList.add('active');
    
    document.getElementById('edit-image').addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (file) tempImages.edit = await fileToBase64(file);
    });
}

function deleteReport(index) {
    if (confirm('このレポートを削除しますか？')) {
        contentData.reports.splice(index, 1);
        renderReports();
    }
}

// TOPICS
function renderTopics() {
    const list = document.getElementById('topics-list');
    const topics = contentData.topics || [];
    list.innerHTML = topics.map((topic, index) => `
        <div class="item-card">
            <div class="item-content">
                <div class="item-meta">
                    <span class="item-date">${formatDate(topic.date)}</span>
                    <span class="item-category">${topic.category}</span>
                </div>
                <h3 class="item-title">${topic.title}</h3>
                <p class="item-description">${topic.description || ''}</p>
                ${topic.image ? `<img src="${topic.image}" class="item-image-thumb">` : ''}
            </div>
            <div class="item-actions">
                <button class="btn-icon btn-edit" onclick="editTopic(${index})" title="編集">✏️</button>
                <button class="btn-icon btn-delete" onclick="deleteTopic(${index})" title="削除">🗑️</button>
            </div>
        </div>
    `).join('') || '<p style="text-align:center;padding:2rem;color:#999;">TOPICSがありません</p>';
}

function editTopic(index) {
    const topic = index !== undefined ? contentData.topics[index] : null;
    editingItem = { type: 'topic', id: index, data: topic };
    
    const body = document.getElementById('edit-modal-body');
    body.innerHTML = `
        <div class="form-group">
            <label>日付</label>
            <input type="date" id="edit-date" class="form-input" value="${topic?.date || new Date().toISOString().split('T')[0]}">
        </div>
        <div class="form-group">
            <label>カテゴリ</label>
            <select id="edit-category" class="form-input">
                <option value="お知らせ" ${topic?.category === 'お知らせ' ? 'selected' : ''}>お知らせ</option>
                <option value="活動報告" ${topic?.category === '活動報告' ? 'selected' : ''}>活動報告</option>
                <option value="政策提言" ${topic?.category === '政策提言' ? 'selected' : ''}>政策提言</option>
                <option value="地域活動" ${topic?.category === '地域活動' ? 'selected' : ''}>地域活動</option>
                <option value="街頭活動" ${topic?.category === '街頭活動' ? 'selected' : ''}>街頭活動</option>
            </select>
        </div>
        <div class="form-group">
            <label>タイトル</label>
            <input type="text" id="edit-title" class="form-input" value="${topic?.title || ''}">
        </div>
        <div class="form-group">
            <label>説明</label>
            <textarea id="edit-description" class="form-textarea" rows="4">${topic?.description || ''}</textarea>
        </div>
        <div class="form-group">
            <label>画像</label>
            <input type="file" id="edit-image" accept="image/*" class="form-input">
            ${topic?.image ? `<img src="${topic.image}" style="max-width: 200px; margin-top: 10px;">` : ''}
        </div>
    `;
    
    document.getElementById('edit-modal-title').textContent = topic ? 'TOPICSを編集' : 'TOPICSを追加';
    document.getElementById('edit-modal').classList.add('active');
    
    document.getElementById('edit-image').addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (file) tempImages.edit = await fileToBase64(file);
    });
}

function deleteTopic(index) {
    if (confirm('このTOPICSを削除しますか？')) {
        contentData.topics.splice(index, 1);
        renderTopics();
    }
}

// 活動報告
function renderActivities() {
    const list = document.getElementById('activities-list');
    const activities = contentData.activities || [];
    list.innerHTML = activities.map((activity, index) => `
        <div class="item-card">
            <div class="item-content">
                <div class="item-meta">
                    <span class="item-date">${formatDate(activity.date)}</span>
                    <span class="item-category">${activity.category}</span>
                </div>
                <h3 class="item-title">${activity.title}</h3>
                <p class="item-description">${activity.description}</p>
                ${activity.images?.length ? `<div class="item-images">${activity.images.map(img => `<img src="${img}" class="item-image-thumb">`).join('')}</div>` : ''}
            </div>
            <div class="item-actions">
                <button class="btn-icon btn-edit" onclick="editActivity(${index})" title="編集">✏️</button>
                <button class="btn-icon btn-delete" onclick="deleteActivity(${index})" title="削除">🗑️</button>
            </div>
        </div>
    `).join('') || '<p style="text-align:center;padding:2rem;color:#999;">活動報告がありません</p>';
}

function editActivity(index) {
    const activity = index !== undefined ? contentData.activities[index] : null;
    editingItem = { type: 'activity', id: index, data: activity };
    tempImages.activityImages = activity?.images ? [...activity.images] : [];
    
    const body = document.getElementById('edit-modal-body');
    body.innerHTML = `
        <div class="form-group">
            <label>日付</label>
            <input type="date" id="edit-date" class="form-input" value="${activity?.date || new Date().toISOString().split('T')[0]}">
        </div>
        <div class="form-group">
            <label>カテゴリ</label>
            <select id="edit-category" class="form-input">
                <option value="街頭活動" ${activity?.category === '街頭活動' ? 'selected' : ''}>街頭活動</option>
                <option value="地域懇談会" ${activity?.category === '地域懇談会' ? 'selected' : ''}>地域懇談会</option>
                <option value="政策提言" ${activity?.category === '政策提言' ? 'selected' : ''}>政策提言</option>
                <option value="地域イベント" ${activity?.category === '地域イベント' ? 'selected' : ''}>地域イベント</option>
                <option value="視察" ${activity?.category === '視察' ? 'selected' : ''}>視察</option>
                <option value="街頭演説" ${activity?.category === '街頭演説' ? 'selected' : ''}>街頭演説</option>
                <option value="懇談会" ${activity?.category === '懇談会' ? 'selected' : ''}>懇談会</option>
            </select>
        </div>
        <div class="form-group">
            <label>タイトル</label>
            <input type="text" id="edit-title" class="form-input" value="${activity?.title || ''}">
        </div>
        <div class="form-group">
            <label>活動内容</label>
            <textarea id="edit-description" class="form-textarea" rows="5">${activity?.description || ''}</textarea>
        </div>
        <div class="form-group">
            <label>写真（複数可）</label>
            <input type="file" id="edit-images" accept="image/*" multiple class="form-input">
            <div id="activity-images-preview" style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px;">
                ${tempImages.activityImages?.map((img, i) => `<div style="position:relative;"><img src="${img}" style="width:100px;height:100px;object-fit:cover;"><button onclick="removeActivityImage(${i})" style="position:absolute;top:0;right:0;background:red;color:white;border:none;border-radius:50%;width:20px;height:20px;cursor:pointer;">×</button></div>`).join('') || ''}
            </div>
        </div>
    `;
    
    document.getElementById('edit-modal-title').textContent = activity ? '活動報告を編集' : '活動報告を追加';
    document.getElementById('edit-modal').classList.add('active');
    
    document.getElementById('edit-images').addEventListener('change', async (e) => {
        for (const file of e.target.files) {
            const base64 = await fileToBase64(file);
            tempImages.activityImages.push(base64);
        }
        editActivity(index);
    });
}

function removeActivityImage(index) {
    tempImages.activityImages.splice(index, 1);
    editActivity(editingItem.id);
}

function deleteActivity(index) {
    if (confirm('この活動報告を削除しますか？')) {
        contentData.activities.splice(index, 1);
        renderActivities();
    }
}

// 統計
function renderStats() {
    const stats = contentData.stats || {};
    // 統計情報タブのフィールド
    document.getElementById('stat-visits').value = stats.visits || 600;
    document.getElementById('stat-voices').value = stats.voices || 1400;
    document.getElementById('stat-events').value = stats.events || 65;
    document.getElementById('stat-updated').value = stats.updated || new Date().toISOString().split('T')[0];
    
    // 活動報告タブの統計フィールド（同じ値を設定）
    const activityStatVisits = document.getElementById('activity-stat-visits');
    const activityStatVoices = document.getElementById('activity-stat-voices');
    const activityStatEvents = document.getElementById('activity-stat-events');
    
    if (activityStatVisits) activityStatVisits.value = stats.visits || 600;
    if (activityStatVoices) activityStatVoices.value = stats.voices || 1400;
    if (activityStatEvents) activityStatEvents.value = stats.events || 65;
}

// 編集保存
function saveEdit() {
    const type = editingItem.type;
    const index = editingItem.id;
    
    if (type === 'policy') {
        const items = document.getElementById('edit-items').value.split('\n').filter(x => x.trim());
        contentData.policies[index] = {
            ...contentData.policies[index],
            title: document.getElementById('edit-title').value,
            description: document.getElementById('edit-description').value,
            items: items,
            image: tempImages.edit || contentData.policies[index].image
        };
        renderPolicies();
    } else if (type === 'project') {
        contentData.projects[index] = {
            ...contentData.projects[index],
            title: document.getElementById('edit-title').value,
            description: document.getElementById('edit-description').value
        };
        renderProjects();
    } else if (type === 'report') {
        const report = {
            id: editingItem.data?.id || generateId(),
            date: document.getElementById('edit-date').value,
            title: document.getElementById('edit-title').value,
            description: document.getElementById('edit-description').value,
            image: tempImages.edit || editingItem.data?.image || '',
            pdfUrl: document.getElementById('edit-pdfUrl').value
        };
        if (index !== undefined && index !== null) {
            contentData.reports[index] = report;
        } else {
            contentData.reports = contentData.reports || [];
            contentData.reports.push(report);
        }
        renderReports();
    } else if (type === 'topic') {
        const topic = {
            id: editingItem.data?.id || generateId(),
            date: document.getElementById('edit-date').value,
            category: document.getElementById('edit-category').value,
            title: document.getElementById('edit-title').value,
            description: document.getElementById('edit-description').value,
            image: tempImages.edit || editingItem.data?.image || ''
        };
        if (index !== undefined && index !== null) {
            contentData.topics[index] = topic;
        } else {
            contentData.topics = contentData.topics || [];
            contentData.topics.push(topic);
        }
        renderTopics();
    } else if (type === 'activity') {
        const activity = {
            id: editingItem.data?.id || generateId(),
            date: document.getElementById('edit-date').value,
            category: document.getElementById('edit-category').value,
            title: document.getElementById('edit-title').value,
            description: document.getElementById('edit-description').value,
            images: tempImages.activityImages || []
        };
        if (index !== undefined && index !== null) {
            contentData.activities[index] = activity;
        } else {
            contentData.activities = contentData.activities || [];
            contentData.activities.push(activity);
        }
        renderActivities();
    }
    
    tempImages = {};
    closeModal('edit-modal');
}

// モーダル
function openEditModal(type) {
    if (type === 'topic') editTopic();
    else if (type === 'activity') editActivity();
    else if (type === 'report') editReport();
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
    editingItem = { type: null, id: null, data: null };
    tempImages = {};
}

// 全体保存
async function saveAllContent() {
    // ヒーロー
    contentData.hero = {
        name: document.getElementById('hero-name').value,
        nameKana: document.getElementById('hero-nameKana').value,
        area: document.getElementById('hero-area').value,
        slogan: document.getElementById('hero-slogan').value,
        image: await getImageData('hero-image') || contentData.hero?.image
    };

    // 私の想い
    contentData.vision = {
        title: document.getElementById('vision-title').value,
        content: document.getElementById('vision-content').value,
        image: await getImageData('vision-image') || contentData.vision?.image
    };

    // プロフィール
    contentData.profile = {
        name: document.getElementById('profile-name').value,
        nameKana: document.getElementById('profile-nameKana').value,
        party: document.getElementById('profile-party').value,
        currentActivities: document.getElementById('profile-currentActivities').value,
        background: document.getElementById('profile-background').value,
        family: document.getElementById('profile-family').value,
        motto: document.getElementById('profile-motto').value,
        image: await getImageData('profile-image') || contentData.profile?.image
    };

    // 統計（活動報告タブまたは統計情報タブのどちらからでも保存可能）
    const activityStatVisits = document.getElementById('activity-stat-visits');
    const activityStatVoices = document.getElementById('activity-stat-voices');
    const activityStatEvents = document.getElementById('activity-stat-events');
    
    contentData.stats = {
        visits: parseInt(activityStatVisits?.value || document.getElementById('stat-visits').value) || 600,
        voices: parseInt(activityStatVoices?.value || document.getElementById('stat-voices').value) || 1400,
        events: parseInt(activityStatEvents?.value || document.getElementById('stat-events').value) || 65,
        updated: document.getElementById('stat-updated').value
    };

    // APIで保存
    showLoading();
    try {
        // データサイズをチェック
        const jsonString = JSON.stringify(contentData);
        const sizeInKB = (jsonString.length * 0.75) / 1024;
        
        console.log(`保存データサイズ: ${sizeInKB.toFixed(2)} KB`);
        
        if (sizeInKB > 900) {
            alert(`⚠️ データサイズが大きすぎます (${sizeInKB.toFixed(0)} KB)\n\n画像が多すぎるか、画像サイズが大きすぎる可能性があります。\n\n対処方法:\n1. 不要な画像を削除\n2. 画像枚数を減らす\n3. 画像の解像度を下げる`);
            hideLoading();
            return;
        }
        
        const response = await fetch('/api/update-content', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: jsonString
        });

        const result = await response.json();
        
        if (response.ok) {
            showSuccessMessage('保存しました！すぐにサイトに反映されます。');
        } else {
            alert('保存に失敗しました: ' + (result.error || '不明なエラー'));
        }
    } catch (error) {
        console.error('保存エラー詳細:', error);
        alert('保存エラー: ' + error.message);
    } finally {
        hideLoading();
    }
}

// ユーティリティ
async function handleImageUpload(e, previewId) {
    const file = e.target.files[0];
    if (file) {
        const base64 = await fileToBase64(file);
        showImagePreview(previewId, base64);
    }
}

function showImagePreview(previewId, src) {
    const preview = document.getElementById(previewId);
    if (preview) preview.innerHTML = `<img src="${src}" class="image-preview-img" style="max-width:100%;max-height:300px;object-fit:contain;">`;
}

async function getImageData(inputId) {
    const input = document.getElementById(inputId);
    if (input?.files?.[0]) return await fileToBase64(input.files[0]);
    return null;
}

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                // 画像を圧縮
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                
                // 最大サイズを1200pxに制限
                const maxSize = 1200;
                if (width > maxSize || height > maxSize) {
                    if (width > height) {
                        height = (height / width) * maxSize;
                        width = maxSize;
                    } else {
                        width = (width / height) * maxSize;
                        height = maxSize;
                    }
                }
                
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                
                // 品質を0.7に設定して圧縮
                const compressed = canvas.toDataURL('image/jpeg', 0.7);
                
                // サイズチェック（800KB以下に制限）
                const sizeInKB = (compressed.length * 0.75) / 1024;
                if (sizeInKB > 800) {
                    // さらに圧縮
                    const veryCompressed = canvas.toDataURL('image/jpeg', 0.5);
                    resolve(veryCompressed);
                } else {
                    resolve(compressed);
                }
            };
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

function showLoading() {
    document.getElementById('loading').classList.add('active');
}

function hideLoading() {
    document.getElementById('loading').classList.remove('active');
}

function showSuccessMessage(message) {
    const el = document.getElementById('success-message');
    el.querySelector('.message').textContent = message;
    el.classList.add('active');
    setTimeout(() => el.classList.remove('active'), 5000);
}
