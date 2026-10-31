(() => {
  const dict = {
    ru: {
      "nav.screenshots": "Скриншоты",
      "nav.features": "Возможности",
      "nav.plugins": "Плагины",
      "nav.local": "Локально",
      "nav.download": "Скачать",
      "nav.releases": "Релизы",
      "hero.title": "Ваш локальный блокнот",
      "hero.lede":
        "Удобные заметки на компьютере: папки, теги, вложения, поиск и тёмный интерфейс. Работает без облака. Нужные возможности можно добавить через плагины.",
      "hero.cta": "Скачать",
      "hero.secondary": "Возможности",
      "shots.kicker": "Интерфейс",
      "shots.title": "Как выглядит UniBook",
      "shots.lede": "Слева — ваши папки и заметки, справа — удобный просмотр и редактирование.",
      "shots.welcome": "Стартовая заметка, теги и дерево папок",
      "shots.preview": "Заметка с примерами оформления",
      "lightbox.close": "Закрыть",
      "features.kicker": "Возможности",
      "features.title": "Всё важное — под рукой",
      "features.lede": "Простой и понятный блокнот: заметки, папки, поиск и удобное оформление.",
      "features.folders.title": "Папки и заметки",
      "features.folders.body":
        "Слева — дерево ваших папок и заметок. Создавайте, переименовывайте и переносите всё как удобно.",
      "features.edit.title": "Просмотр и редактирование",
      "features.edit.body":
        "Читайте заметку в удобном виде или переключайтесь в правку. Есть панель форматирования, смайлики и подсказки.",
      "features.tags.title": "Теги и поиск",
      "features.tags.body": "Отмечайте заметки тегами и быстро находите нужное по тексту или по тегу.",
      "features.attach.title": "Вложения",
      "features.attach.body":
        "Картинки и файлы хранятся рядом с заметкой. Можно вставить изображение из буфера обмена.",
      "features.wiki.title": "Связи между заметками",
      "features.wiki.body": "Связывайте заметки между собой и переходите по ссылкам в один клик.",
      "features.tasks.title": "Списки дел и многое другое",
      "features.tasks.body":
        "Отмечайте задачи галочками, вставляйте код, видео и даты прямо в заметку.",
      "features.lang.title": "Русский и английский",
      "features.lang.body": "Интерфейс на двух языках — выберите тот, который вам удобнее.",
      "plugins.kicker": "Плагины",
      "plugins.title": "Плагины под ваши задачи",
      "plugins.lede":
        "Нужные возможности подключаются отдельно — только то, чем вы реально пользуетесь.",
      "plugins.ai.title": "Нейросети",
      "plugins.ai.body": "Подключайте популярные ИИ-сервисы и используйте их прямо в заметках.",
      "plugins.writer.title": "AI Writer",
      "plugins.writer.body": "Пишите и дорабатывайте заметки с помощью искусственного интеллекта.",
      "plugins.web.title": "Сохранение из интернета",
      "plugins.web.body":
        "Сохраняйте страницы сайта в заметку или получайте краткое изложение с помощью ИИ.",
      "plugins.security.title": "Безопасность с ИИ",
      "plugins.security.body":
        "Проверяйте заметки на случайно оставленные пароли и другие секреты.",
      "plugins.yt.title": "Расшифровка YouTube",
      "plugins.yt.body":
        "Превращайте субтитры видео в заметку — при желании с помощью нейросети.",
      "plugins.git.title": "Синхронизация",
      "plugins.git.body": "Синхронизируйте папку заметок с Git-репозиторием, если вам это нужно.",
      "plugins.import.title": "Импорт и экспорт",
      "plugins.import.body": "Переносите заметки из Joplin, Notable и Obsidian — и обратно.",
      "plugins.extra.title": "Темы и напоминания",
      "plugins.extra.body": "Меняйте оформление под себя и ставьте напоминания с уведомлениями.",
      "local.kicker": "Локально",
      "local.title": "Всё хранится у вас",
      "local.lede":
        "Заметки лежат обычными файлами на вашем компьютере. Папку хранения можно выбрать самому. Облако не обязательно.",
      "local.p1": "Данные остаются на вашем устройстве",
      "local.p2": "Можно открыть заметки в другом редакторе",
      "local.p3": "Легко сделать резервную копию папки",
      "download.kicker": "Скачать",
      "download.title": "Скачать UniBook",
      "download.lede": "Работает на Windows, Linux и macOS — выберите версию для своей системы.",
      "download.win": "Версия для Windows",
      "download.linux": "Версия для Linux",
      "download.mac": "Версия для macOS",
      "download.note": "Скачайте установку из раздела релизов.",
      "feedback.kicker": "Обратная связь",
      "feedback.title": "Нашли ошибку? Сообщите о ней",
      "feedback.lede": "Предложения по улучшению — туда же.",
      "feedback.cta": "Написать нам",
      "footer.tag": "Локальный блокнот, который остаётся вашим.",
      "footer.releases": "Релизы",
      "footer.issues": "Ошибки и предложения",
      title: "UniBook — ваш локальный блокнот",
      description:
        "UniBook — локальный блокнот для заметок. Папки, теги, вложения и плагины. Работает на Windows, Linux и macOS. Без обязательного облака.",
    },
    en: {
      "nav.screenshots": "Screenshots",
      "nav.features": "Features",
      "nav.plugins": "Plugins",
      "nav.local": "Local",
      "nav.download": "Download",
      "nav.releases": "Releases",
      "hero.title": "Your local notebook",
      "hero.lede":
        "Handy notes on your computer: folders, tags, attachments, search and a dark interface. Works without the cloud. Add what you need with plugins.",
      "hero.cta": "Download",
      "hero.secondary": "Features",
      "shots.kicker": "Interface",
      "shots.title": "What UniBook looks like",
      "shots.lede": "Folders and notes on the left, comfortable reading and editing on the right.",
      "shots.welcome": "Welcome note, tags and the folder tree",
      "shots.preview": "A note with formatting examples",
      "lightbox.close": "Close",
      "features.kicker": "Features",
      "features.title": "Everything important, close at hand",
      "features.lede": "A simple notebook: notes, folders, search and easy formatting.",
      "features.folders.title": "Folders and notes",
      "features.folders.body":
        "On the left — your folders and notes. Create, rename and move them however you like.",
      "features.edit.title": "Preview and editing",
      "features.edit.body":
        "Read a note in a comfortable view or switch to editing. Formatting tools, emoji and tips are built in.",
      "features.tags.title": "Tags and search",
      "features.tags.body": "Tag your notes and quickly find what you need by text or by tag.",
      "features.attach.title": "Attachments",
      "features.attach.body":
        "Images and files stay next to the note. You can paste an image from the clipboard.",
      "features.wiki.title": "Links between notes",
      "features.wiki.body": "Connect notes to each other and jump between them in one click.",
      "features.tasks.title": "To-do lists and more",
      "features.tasks.body": "Check off tasks, add code, video and dates right inside a note.",
      "features.lang.title": "Russian and English",
      "features.lang.body": "The interface supports two languages — pick the one you prefer.",
      "plugins.kicker": "Plugins",
      "plugins.title": "Plugins for your tasks",
      "plugins.lede": "Add only the extras you actually use.",
      "plugins.ai.title": "AI services",
      "plugins.ai.body": "Connect popular AI services and use them right inside your notes.",
      "plugins.writer.title": "AI Writer",
      "plugins.writer.body": "Write and improve notes with the help of artificial intelligence.",
      "plugins.web.title": "Save from the web",
      "plugins.web.body": "Save a webpage as a note, or get a short summary with AI.",
      "plugins.security.title": "Security with AI",
      "plugins.security.body": "Check notes for passwords and other secrets left by mistake.",
      "plugins.yt.title": "YouTube transcription",
      "plugins.yt.body": "Turn video captions into a note — with AI help if you want.",
      "plugins.git.title": "Sync",
      "plugins.git.body": "Sync your notes folder with a Git repository when you need it.",
      "plugins.import.title": "Import and export",
      "plugins.import.body": "Move notes from Joplin, Notable and Obsidian — and back again.",
      "plugins.extra.title": "Themes and reminders",
      "plugins.extra.body": "Change the look to fit you and set reminders with notifications.",
      "local.kicker": "Local",
      "local.title": "Everything stays with you",
      "local.lede":
        "Notes are regular files on your computer. You can choose the folder. The cloud is optional.",
      "local.p1": "Your data stays on your device",
      "local.p2": "Open notes in another editor if you want",
      "local.p3": "Back up the folder in one step",
      "download.kicker": "Download",
      "download.title": "Download UniBook",
      "download.lede": "Works on Windows, Linux and macOS — pick the version for your system.",
      "download.win": "Windows version",
      "download.linux": "Linux version",
      "download.mac": "macOS version",
      "download.note": "Get the installer from the releases page.",
      "feedback.kicker": "Feedback",
      "feedback.title": "Found a bug? Tell us",
      "feedback.lede": "Feature ideas go to the same place.",
      "feedback.cta": "Contact us",
      "footer.tag": "A local notebook that stays yours.",
      "footer.releases": "Releases",
      "footer.issues": "Bugs & ideas",
      title: "UniBook — your local notebook",
      description:
        "UniBook is a local notebook for your notes. Folders, tags, attachments and plugins. Windows, Linux and macOS. No cloud required.",
    },
  };

  const buttons = [...document.querySelectorAll(".lang-btn")];
  const nodes = [...document.querySelectorAll("[data-i18n]")];
  const metaDescription = document.querySelector('meta[name="description"]');

  const saved = localStorage.getItem("unibook-lang");
  const initial =
    saved === "ru" || saved === "en"
      ? saved
      : navigator.language?.toLowerCase().startsWith("ru")
        ? "ru"
        : "en";

  function apply(lang) {
    const pack = dict[lang] || dict.ru;
    document.documentElement.lang = lang;
    document.title = pack.title;
    if (metaDescription) metaDescription.setAttribute("content", pack.description);

    nodes.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (pack[key]) el.textContent = pack[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (pack[key]) el.setAttribute("aria-label", pack[key]);
    });

    buttons.forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    localStorage.setItem("unibook-lang", lang);
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => apply(btn.dataset.lang));
  });

  apply(initial);
})();
