// 管理画面のJavaScript - 湯川寛之オフィシャルサイト

// グローバル変数
let contentData = { topics: [], activities: [], stats: {} };
let editingItemId = null;
let editingType = null;
let activityImages = [];
let topicImage = null;

// 初期化
document.addEventListener('DOMContentLoaded', async () => {
    await loadContent();
    setupEventListeners();
    renderContent();
});

// コンテンツデータの読み込み
async function loadContent() {
    try {
        const response = await fetch('/data/content.json');
        contentData = await response.json();
    } catch (error) {
        console.error('コンテンツ読み込みエラー:', error);
        contentData = { topics: [], activities: [], stats: { visits: 500, voices: 1200, events: 50, updated: new Date().toISOString().split('T')[0] } };
    }
}

// イベントリスナーの設定
function setupEventListeners() {
    // タブ切り替え
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    // 追加ボタン
    document.getElementById('add-topic-btn').addEventListener('click', () => openTopicModal());
    document.getElementById('add-activity-btn').addEventListener('click', () => openActivityModal());

    // 保存ボタン
    document.getElementById('save-topic-btn').addEventListener('click', saveTopic);
    document.getElementById('save-activity-btn').addEventListener('click', saveActivity);
    document.getElementById('save-btn').addEventListener('click', saveAllContent);

    // 画像アップロード
    document.getElementById('topic-image').addEventListener('change', handleTopicImageUpload);
    document.getElementById('activity-images').addEventListener('change', handleActivityImagesUpload);

    // ドラッグ&ドロップ
    setupDragAndDrop('topic-image-preview', 'topic-image');
}

// タブ切り替え
function switchTab(tabName) {
    document.querySelectorAll('.admin-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.admin-panel').forEach(panel => panel.classList.remove('active'));
    
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`${tabName}-panel`).classList.add('active');
}

// コンテンツのレンダリング
function renderContent() {
    renderTopics();
    renderActivities();
    renderStats();
}

// TOPICSのレンダリング
function renderTopics() {
    const list = document.getElementById('topics-list');
    if (!contentData.topics || contentData.topics.length === 0) {
        list.innerHTML = '<div style="text-align: center; padding: 3rem; color: var(--gray-500);">まだTOPICSがありません。<br>「新しいTOPICSを追加」ボタンから追加してください。</div>';
        return;
    }

    list.innerHTML = contentData.topics.sort((a, b) => new Date(b.date) - new Date(a.date)).map(topic => `
        <div class="item-card">
            <div class="item-content">
                <div class="item-meta">
                    <span class="item-date">${formatDate(topic.date)}</span>
                    <span class="item-category">${topic.category}</span>
                </div>
                <h3 class="item-title">${topic.title}</h3>
                ${topic.description ? `<p class="item-description">${topic.description}</p>` : ''}
                ${topic.image ? `<div class="item-images"><img src="${topic.image}" class="item-image-thumb" alt="${topic.title}"></div>` : ''}
            </div>
            <div class="item-actions">
                <button class="btn-icon btn-edit" onclick="editTopic('${topic.id}')" title="編集">✏️</button>
                <button class="btn-icon btn-delete" onclick="deleteTopic('${topic.id}')" title="削除">🗑️</button>
            </div>
        </div>
    `).join('');
}

// 活動報告のレンダリング
function renderActivities() {
    const list = document.getElementById('activities-list');
    if (!contentData.activities || contentData.activities.length === 0) {
        list.innerHTML = '<div style="text-align: center; padding: 3rem; color: var(--gray-500);">まだ活動報告がありません。<br>「新しい活動報告を追加」ボタンから追加してください。</div>';
        return;
    }

    list.innerHTML = contentData.activities.sort((a, b) => new Date(b.date) - new Date(a.date)).map(activity => `
        <div class="item-card">
            <div class="item-content">
                <div class="item-meta">
                    <span class="item-date">${formatDate(activity.date)}</span>
                    <span class="item-category">${activity.category}</span>
                </div>
                <h3 class="item-title">${activity.title}</h3>
                <p class="item-description">${activity.description}</p>
                ${activity.images && activity.images.length > 0 ? `
                    <div class="item-images">
                        ${activity.images.map(img => `<img src="${img}" class="item-image-thumb" alt="${activity.title}">`).join('')}
                    </div>
                ` : ''}
            </div>
            <div class="item-actions">
                <button class="btn-icon btn-edit" onclick="editActivity('${activity.id}')" title="編集">✏️</button>
                <button class="btn-icon btn-delete" onclick="deleteActivity('${activity.id}')" title="削除">🗑️</button>
            </div>
        </div>
    `).join('');
}

// 統計情報のレンダリング
function renderStats() {
    document.getElementById('stat-visits').value = contentData.stats?.visits || 500;
    document.getElementById('stat-voices').value = contentData.stats?.voices || 1200;
    document.getElementById('stat-events').value = contentData.stats?.events || 50;
    document.getElementById('stat-updated').value = contentData.stats?.updated || new Date().toISOString().split('T')[0];
}

// TOPICSモーダルを開く
function openTopicModal(topicId = null) {
    editingItemId = topicId;
    editingType = 'topic';
    const modal = document.getElementById('topic-modal');
    
    if (topicId) {
        const topic = contentData.topics.find(t => t.id === topicId);
        document.getElementById('topic-modal-title').textContent = 'TOPICSを編集';
        document.getElementById('topic-date').value = topic.date;
        document.getElementById('topic-category').value = topic.category;
        document.getElementById('topic-title').value = topic.title;
        document.getElementById('topic-description').value = topic.description || '';
        
        if (topic.image) {
            topicImage = topic.image;
            showTopicImagePreview(topic.image);
        }
    } else {
        document.getElementById('topic-modal-title').textContent = 'TOPICSを追加';
        document.getElementById('topic-date').value = new Date().toISOString().split('T')[0];
        document.getElementById('topic-category').value = '';
        document.getElementById('topic-title').value = '';
        document.getElementById('topic-description').value = '';
        topicImage = null;
        resetTopicImagePreview();
    }
    
    modal.classList.add('active');
}

// 活動報告モーダルを開く
function openActivityModal(activityId = null) {
    editingItemId = activityId;
    editingType = 'activity';
    const modal = document.getElementById('activity-modal');
    
    if (activityId) {
        const activity = contentData.activities.find(a => a.id === activityId);
        document.getElementById('activity-modal-title').textContent = '活動報告を編集';
        document.getElementById('activity-date').value = activity.date;
        document.getElementById('activity-category').value = activity.category;
        document.getElementById('activity-title').value = activity.title;
        document.getElementById('activity-description').value = activity.description;
        
        if (activity.images && activity.images.length > 0) {
            activityImages = activity.images.slice();
            renderActivityImagesPreview();
        }
    } else {
        document.getElementById('activity-modal-title').textContent = '活動報告を追加';
        document.getElementById('activity-date').value = new Date().toISOString().split('T')[0];
        document.getElementById('activity-category').value = '';
        document.getElementById('activity-title').value = '';
        document.getElementById('activity-description').value = '';
        activityImages = [];
        document.getElementById('activity-images-preview').innerHTML = '';
    }
    
    modal.classList.add('active');
}

// モーダルを閉じる
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    editingItemId = null;
    editingType = null;
}

// TOPICSを保存
function saveTopic() {
    const date = document.getElementById('topic-date').value;
    const category = document.getElementById('topic-category').value;
    const title = document.getElementById('topic-title').value;
    const description = document.getElementById('topic-description').value;

    if (!date || !category || !title) {
        alert('必須項目を入力してください');
        return;
    }

    const topic = {
        id: editingItemId || generateId(),
        date,
        category,
        title,
        description,
        image: topicImage
    };

    if (editingItemId) {
        const index = contentData.topics.findIndex(t => t.id === editingItemId);
        contentData.topics[index] = topic;
    } else {
        contentData.topics.push(topic);
    }

    closeModal('topic-modal');
    renderTopics();
}

// 活動報告を保存
function saveActivity() {
    const date = document.getElementById('activity-date').value;
    const category = document.getElementById('activity-category').value;
    const title = document.getElementById('activity-title').value;
    const description = document.getElementById('activity-description').value;

    if (!date || !category || !title || !description) {
        alert('必須項目を入力してください');
        return;
    }

    const activity = {
        id: editingItemId || generateId(),
        date,
        category,
        title,
        description,
        images: activityImages
    };

    if (editingItemId) {
        const index = contentData.activities.findIndex(a => a.id === editingItemId);
        contentData.activities[index] = activity;
    } else {
        contentData.activities.push(activity);
    }

    closeModal('activity-modal');
    renderActivities();
}

// 全体を保存
async function saveAllContent() {
    // 統計情報を更新
    contentData.stats = {
        visits: parseInt(document.getElementById('stat-visits').value) || 500,
        voices: parseInt(document.getElementById('stat-voices').value) || 1200,
        events: parseInt(document.getElementById('stat-events').value) || 50,
        updated: document.getElementById('stat-updated').value || new Date().toISOString().split('T')[0]
    };

    showLoading();

    try {
        // LocalStorageに保存
        localStorage.setItem('yukawa-content', JSON.stringify(contentData));
        
        // JSONファイルとしてダウンロード
        const blob = new Blob([JSON.stringify(contentData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'content.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showSuccessMessage('変更内容を保存しました。ダウンロードしたcontent.jsonファイルをpublic/data/content.jsonに置き換えて、GitHubにpushしてください。');
    } catch (error) {
        console.error('保存エラー:', error);
        alert('保存中にエラーが発生しました: ' + error.message);
    } finally {
        hideLoading();
    }
}

// TOPICSを編集
function editTopic(id) {
    openTopicModal(id);
}

// TOPICSを削除
function deleteTopic(id) {
    if (confirm('このTOPICSを削除してもよろしいですか?')) {
        contentData.topics = contentData.topics.filter(t => t.id !== id);
        renderTopics();
    }
}

// 活動報告を編集
function editActivity(id) {
    openActivityModal(id);
}

// 活動報告を削除
function deleteActivity(id) {
    if (confirm('この活動報告を削除してもよろしいですか?')) {
        contentData.activities = contentData.activities.filter(a => a.id !== id);
        renderActivities();
    }
}

// TOPIC画像アップロード処理
function handleTopicImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            topicImage = event.target.result;
            showTopicImagePreview(topicImage);
        };
        reader.readAsDataURL(file);
    }
}

// TOPIC画像プレビュー表示
function showTopicImagePreview(imageSrc) {
    const preview = document.getElementById('topic-image-preview');
    preview.innerHTML = `<img src="${imageSrc}" class="image-preview-img" alt="Preview">`;
}

// TOPIC画像プレビューリセット
function resetTopicImagePreview() {
    const preview = document.getElementById('topic-image-preview');
    preview.innerHTML = `
        <div class="image-placeholder">
            <span class="icon">📷</span>
            <p>画像を選択またはドラッグ&ドロップ</p>
        </div>
    `;
}

// 活動報告画像アップロード処理
function handleActivityImagesUpload(e) {
    const files = Array.from(e.target.files);
    
    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (event) => {
            activityImages.push(event.target.result);
            renderActivityImagesPreview();
        };
        reader.readAsDataURL(file);
    });
}

// 活動報告画像プレビューレンダリング
function renderActivityImagesPreview() {
    const preview = document.getElementById('activity-images-preview');
    preview.innerHTML = activityImages.map((img, index) => `
        <div class="preview-image-item">
            <img src="${img}" alt="Preview ${index + 1}">
            <button class="preview-image-remove" onclick="removeActivityImage(${index})">✕</button>
        </div>
    `).join('');
}

// 活動報告画像削除
function removeActivityImage(index) {
    activityImages.splice(index, 1);
    renderActivityImagesPreview();
}

// ドラッグ&ドロップ設定
function setupDragAndDrop(dropZoneId, inputId) {
    const dropZone = document.getElementById(dropZoneId);
    const input = document.getElementById(inputId);

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => {
            dropZone.style.borderColor = 'var(--primary-blue)';
            dropZone.style.background = 'white';
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => {
            dropZone.style.borderColor = '';
            dropZone.style.background = '';
        });
    });

    dropZone.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        input.files = files;
        input.dispatchEvent(new Event('change'));
    });
}

// ユーティリティ関数
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

function showLoading() {
    document.getElementById('loading').classList.add('active');
}

function hideLoading() {
    document.getElementById('loading').classList.remove('active');
}

function showSuccessMessage(message = '保存しました！') {
    const messageEl = document.getElementById('success-message');
    messageEl.querySelector('.message').textContent = message;
    messageEl.classList.add('active');
    setTimeout(() => {
        messageEl.classList.remove('active');
    }, 5000);
}
