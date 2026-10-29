(() => {
  const dict = {
    ru: {
      "nav.screenshots": "Скриншоты",
      "nav.features": "Возможности",
      "nav.local": "Локально",
      "nav.download": "Скачать",
      "nav.releases": "Релизы",
      "hero.title": "Заметки - заметки в формате Markdown.",
      "hero.lede":
        "Кроссплатформенное десктоп-приложение для Windows, Linux и macOS: папки, теги, вложения, просмотр и правка. Облако не обязательно. Функционал расширяется плагинами.",
      "hero.cta": "Скачать",
      "hero.secondary": "Возможности",
      "hero.meta": "Кроссплатформенно · Windows · Linux · macOS · UI: ru / en",
      "shots.title": "Как выглядит UniBook",
      "shots.lede": "Дерево папок, превью Markdown, теги, код, вложения и задачи — в одном окне.",
      "shots.welcome": "Стартовая заметка, теги и дерево папок",
      "shots.preview": "Код, цитаты, видео и списки задач в превью",
      "lightbox.close": "Закрыть",
      "features.title": "Всё, что нужно для заметок",
      "features.lede": "Файловая система как сайдбар. Markdown как данные. Без проприетарной базы.",
      "features.folders.title": "Дерево настоящих папок",
      "features.folders.body":
        "Создавайте, переименовывайте и перемещайте заметки. Сайдбар — это диск, а не виртуальная библиотека.",
      "features.edit.title": "Просмотр и правка",
      "features.edit.body":
        "Рендер Markdown, режим текста и тулбар: жирный, списки, заголовки, код, ссылки и картинки.",
      "features.tags.title": "Теги в самом файле",
      "features.tags.body":
        "YAML frontmatter и inline #теги. Поиск по тегу или обычному тексту по всему дереву.",
      "features.wiki.title": "Вики-ссылки",
      "features.wiki.body":
        "[[Заметка]] или [[путь/Заметка|Подпись]] — переход между заметками в один клик.",
      "features.attach.title": "Вложения рядом",
      "features.attach.body":
        "Картинки и файлы хранятся рядом в папке с заметкой. Вставка из буфера — Ctrl+V.",
      "features.tasks.title": "Задачи и код",
      "features.tasks.body":
        "Кликабельные чекбоксы, подсветка кода, видео и даты чипами прямо в превью.",
      "features.plugins.title": "Плагины",
      "features.plugins.body":
        "Расширяйте функционал приложения плагинами — под свои сценарии и рабочий процесс.",
      "local.title": "Ваши файлы остаются вашими",
      "local.lede":
        "Каждая заметка — .md в выбранной папке. Открывайте в любом редакторе, синхронизируйте через git или сетевой диск.",
      "download.title": "Скачать UniBook",
      "download.lede": "Кроссплатформенное приложение: для каждой платформы своя версия.",
      "download.win": "UniBook.exe · WebView2",
      "download.linux": "x64 · GTK4 + WebKitGTK",
      "download.mac": "12+ · WebKit",
      "download.note": "Сборки публикуются в GitHub Releases.",
      "footer.tag": "Markdown-заметки, которые остаются вашими.",
      "footer.releases": "Релизы",
      title: "UniBook — Markdown-заметки, которые остаются вашими",
      description:
        "UniBook — кроссплатформенный блокнот на Markdown для Windows, Linux и macOS. Папки, теги, вложения и плагины. Без обязательного облака.",
    },
    en: {
      "nav.screenshots": "Screenshots",
      "nav.features": "Features",
      "nav.local": "Local-first",
      "nav.download": "Download",
      "nav.releases": "Releases",
      "hero.title": "Notes - notes in Markdown format.",
      "hero.lede":
        "A cross-platform desktop app for Windows, Linux and macOS: folders, tags, attachments, preview and edit. No cloud required. Extend it with plugins.",
      "hero.cta": "Download",
      "hero.secondary": "Features",
      "hero.meta": "Cross-platform · Windows · Linux · macOS · UI: ru / en",
      "shots.title": "UniBook in action",
      "shots.lede": "Folder tree, Markdown preview, tags, code, attachments and tasks — in one window.",
      "shots.welcome": "Welcome note, tags and the folder tree",
      "shots.preview": "Code, quotes, video and task lists in preview",
      "lightbox.close": "Close",
      "features.title": "Everything a notebook needs",
      "features.lede": "The filesystem is the sidebar. Markdown is the data. No proprietary vault.",
      "features.folders.title": "A tree of real folders",
      "features.folders.body":
        "Create, rename, move and delete notes. The sidebar is the disk — not a fake library.",
      "features.edit.title": "Preview and edit",
      "features.edit.body":
        "Rendered Markdown, text mode, and a toolbar for bold, lists, headings, code, links and images.",
      "features.tags.title": "Tags that live in the file",
      "features.tags.body":
        "YAML frontmatter and inline #tags. Search by tag or plain text across the tree.",
      "features.wiki.title": "Wiki links",
      "features.wiki.body": "[[Note]] or [[path/Note|Label]] — jump between notes in one click.",
      "features.attach.title": "Attachments beside the note",
      "features.attach.body":
        "Images and files are stored next to the note in its folder. Paste from the clipboard with Ctrl+V.",
      "features.tasks.title": "Tasks and code",
      "features.tasks.body":
        "Clickable checkboxes, syntax-highlighted code, videos and date chips in the preview.",
      "features.plugins.title": "Plugins",
      "features.plugins.body":
        "Extend the app with plugins — tailor it to your workflow and use cases.",
      "local.title": "Your files stay yours",
      "local.lede":
        "Every note is a .md file in a folder you choose. Open them in any editor; sync with git or a network share.",
      "download.title": "Download UniBook",
      "download.lede": "Cross-platform: a dedicated build for each platform.",
      "download.win": "UniBook.exe · WebView2",
      "download.linux": "x64 · GTK4 + WebKitGTK",
      "download.mac": "12+ · WebKit",
      "download.note": "Builds are published on GitHub Releases.",
      "footer.tag": "Markdown notes that stay yours.",
      "footer.releases": "Releases",
      title: "UniBook — Markdown notes that stay yours",
      description:
        "UniBook is a cross-platform Markdown notebook for Windows, Linux and macOS. Folders, tags, attachments and plugins. No cloud required.",
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
