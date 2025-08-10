import React from "react";

export default function DsnsGta03Onepage() {
  const leaders = [
    { rank: "Генерал", name: "Коді Флоренс", role: "Головнокомандувач" },
    { rank: "Полковник", name: "Ігор Хмельник", role: "Заступник командира" },
    { rank: "Полковник", name: "Іван Будько", role: "Оперативний офіцер" },
    { rank: "Полковник", name: "Андрій Макарович", role: "Штабний офіцер" },
    { rank: "Полковник", name: "Ростислав Фамович", role: "Командир підрозділу" },
    { rank: "Підполковник", name: "Дмитро Янокович", role: "Інспектор" },
    { rank: "Підполковник", name: "Тимофій Ейсмонт", role: "Логістика / Зв'язок" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-900">
      <header className="bg-white/60 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">ДСНС</div>
            <div>
              <h1 className="text-lg font-semibold">ДСНС — UKRAINE GTA 03</h1>
              <p className="text-sm text-gray-600">Офіційний підрозділ гри — Onepage</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-4 text-sm">
            <a href="#about" className="hover:underline">Про нас</a>
            <a href="#leadership" className="hover:underline">Керівництво</a>
            <a href="#contacts" className="hover:underline">Контакти</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">ДСНС — UKRAINE GTA 03</h2>
            <p className="mt-4 text-gray-700">Офіційне представництво служби порятунку на сервері UKRAINE GTA 03. Ми відповідаємо за безпеку, реагування на надзвичайні ситуації та навчання громадян гри.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              <li className="bg-white p-3 rounded-lg shadow-sm">Реагування на пожежі</li>
              <li className="bg-white p-3 rounded-lg shadow-sm">Рятувальні операції</li>
              <li className="bg-white p-3 rounded-lg shadow-sm">Навчання та тренування</li>
              <li className="bg-white p-3 rounded-lg shadow-sm">Інформаційна підтримка гравців</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#leadership" className="inline-block bg-red-600 text-white px-5 py-2 rounded-lg shadow">Знайти керівництво</a>
              <a href="#contacts" className="inline-block border border-gray-300 px-5 py-2 rounded-lg">Зв'язатись</a>
            </div>
          </div>
        </section>

        <section id="about" className="mt-14">
          <h3 className="text-2xl font-semibold">Про підрозділ</h3>
          <p className="mt-3 text-gray-700">Наш підрозділ — це організована команда гравців, які виконують роль ДСНС у світі GTA. Ми тренуємо реагування на інциденти, координуємо рятувальні місії та допомагаємо з безпекою подій на сервері.</p>
        </section>

        <section id="leadership" className="mt-10">
          <h3 className="text-2xl font-semibold">Керівничий склад</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.map((l, i) => (
              <article key={i} className="bg-white rounded-xl p-4 shadow-sm flex gap-4 items-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-lg font-semibold">{getInitials(l.name)}</div>
                <div>
                  <div className="text-sm text-gray-500">{l.rank}</div>
                  <div className="font-semibold">{l.name}</div>
                  <div className="text-xs text-gray-600">{l.role}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contacts" className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Контакти</h3>
          <p className="mt-2 text-gray-700">Для зв'язку використовуйте внутрішні канали сервера або напишіть керівництву в особисті повідомлення.</p>
        </section>
      </main>
    </div>
  );
}

function getInitials(fullName) {
  const parts = fullName.split(" ");
  if (!parts.length) return "--";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}
