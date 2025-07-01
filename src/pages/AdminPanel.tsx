import React, { useState } from 'react';

// News article structure (from News.tsx)
const initialNews = [
  {
    id: 1,
    title: "Пример заголовка новости 1",
    excerpt: "Краткое описание новости.",
    image: "/img/college/img1.jpeg",
    category: "Достижения",
    author: "Админ",
    date: "2024-07-01",
    readTime: "4 мин",
    featured: true,
    content: "Полный текст новости здесь."
  },
  {
    id: 2,
    title: "Пример заголовка новости 2",
    excerpt: "Еще одно краткое описание.",
    image: "/img/college/img2.jpeg",
    category: "Наука",
    author: "Админ",
    date: "2024-06-20",
    readTime: "3 мин",
    featured: false,
    content: "Полный текст второй новости."
  }
];

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [news, setNews] = useState(initialNews);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    image: '',
    category: '',
    author: '',
    date: '',
    readTime: '',
    featured: false,
    content: ''
  });
  const [showForm, setShowForm] = useState(false);

  // Handlers for News CRUD
  const handleEdit = (article) => {
    setEditingId(article.id);
    setForm({ ...article });
    setShowForm(true);
  };
  const handleDelete = (id) => {
    setNews(news.filter(n => n.id !== id));
  };
  const handleAdd = () => {
    setEditingId(null);
    setForm({
      title: '', excerpt: '', image: '', category: '', author: '', date: '', readTime: '', featured: false, content: ''
    });
    setShowForm(true);
  };
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setNews(news.map(n => n.id === editingId ? { ...form, id: editingId } : n));
    } else {
      setNews([...news, { ...form, id: Date.now() }]);
    }
    setShowForm(false);
    setEditingId(null);
  };
  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-950 text-white flex flex-col py-8 px-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-8">Админ-панель</h2>
        <nav className="flex flex-col gap-4">
          <button
            className={`text-left px-4 py-2 rounded-lg transition-colors ${activeTab === 'news' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
            onClick={() => setActiveTab('news')}
          >
            Управление новостями
          </button>
          {/* Future: Add more sections here */}
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10 bg-white/90 min-h-screen">
        {activeTab === 'news' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Новости</h1>
              <button
                onClick={handleAdd}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Добавить новость
              </button>
            </div>
            {/* News List */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-xl shadow">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4">Заголовок</th>
                    <th className="py-2 px-4">Категория</th>
                    <th className="py-2 px-4">Дата</th>
                    <th className="py-2 px-4">Избранное</th>
                    <th className="py-2 px-4">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {news.map(article => (
                    <tr key={article.id} className="border-b">
                      <td className="py-2 px-4 font-semibold">{article.title}</td>
                      <td className="py-2 px-4">{article.category}</td>
                      <td className="py-2 px-4">{article.date}</td>
                      <td className="py-2 px-4">{article.featured ? 'Да' : 'Нет'}</td>
                      <td className="py-2 px-4 flex gap-2">
                        <button onClick={() => handleEdit(article)} className="bg-yellow-500 text-white px-3 py-1 rounded">Редактировать</button>
                        <button onClick={() => handleDelete(article.id)} className="bg-red-600 text-white px-3 py-1 rounded">Удалить</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* News Form Modal */}
            {showForm && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                <form onSubmit={handleFormSubmit} className="bg-white rounded-xl shadow-xl p-8 w-full max-w-lg flex flex-col gap-4 relative">
                  <h2 className="text-2xl font-bold mb-2">{editingId ? 'Редактировать новость' : 'Добавить новость'}</h2>
                  <label className="font-semibold">Заголовок
                    <input name="title" value={form.title} onChange={handleFormChange} className="w-full border rounded px-3 py-2 mt-1" required />
                  </label>
                  <label className="font-semibold">Краткое описание
                    <input name="excerpt" value={form.excerpt} onChange={handleFormChange} className="w-full border rounded px-3 py-2 mt-1" required />
                  </label>
                  <label className="font-semibold">URL изображения
                    <input name="image" value={form.image} onChange={handleFormChange} className="w-full border rounded px-3 py-2 mt-1" />
                  </label>
                  <label className="font-semibold">Категория
                    <input name="category" value={form.category} onChange={handleFormChange} className="w-full border rounded px-3 py-2 mt-1" />
                  </label>
                  <label className="font-semibold">Автор
                    <input name="author" value={form.author} onChange={handleFormChange} className="w-full border rounded px-3 py-2 mt-1" />
                  </label>
                  <label className="font-semibold">Дата
                    <input name="date" value={form.date} onChange={handleFormChange} className="w-full border rounded px-3 py-2 mt-1" />
                  </label>
                  <label className="font-semibold">Время чтения
                    <input name="readTime" value={form.readTime} onChange={handleFormChange} className="w-full border rounded px-3 py-2 mt-1" />
                  </label>
                  <label className="font-semibold flex items-center gap-2">Избранное
                    <input name="featured" type="checkbox" checked={form.featured} onChange={handleFormChange} className="ml-2" />
                  </label>
                  <label className="font-semibold">Содержимое
                    <textarea name="content" value={form.content} onChange={handleFormChange} className="w-full border rounded px-3 py-2 mt-1 min-h-[100px]" required />
                  </label>
                  <div className="flex gap-4 mt-4">
                    <button type="submit" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Сохранить</button>
                    <button type="button" onClick={handleCancel} className="bg-gray-400 text-white px-5 py-2 rounded-lg font-semibold">Отмена</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPanel; 