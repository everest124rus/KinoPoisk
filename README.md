# KinoPoisk

Приложение для просмотра каталога фильмов. Реализовано в стиле Liquid Glass (glassmorphism).

## Технологии

- **Frontend**: React 19, TypeScript, Vite
- **Backend**: JSON Server
- **Стили**: CSS с эффектом glassmorphism
- **HTTP клиент**: Axios

## Установка

Установите зависимости для всех частей проекта:

```bash
npm run install:all
```

Или установите по отдельности:

```bash
# Корневая директория
npm install

# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

## Запуск

### Режим разработки (dev)

Запускает оба сервера одновременно с hot-reload:

```bash
npm run dev
```

- Backend: http://localhost:3000
- Frontend: http://localhost:5173

### Production режим (start)

Собирает frontend и запускает production версию:

```bash
npm start
```

### Остановка серверов

```bash
npm stop
```

## Структура проекта

```
movie-catalog/
├── backend/          # JSON Server API
│   ├── db.json      # База данных фильмов
│   └── server.js    # Сервер
├── frontend/         # React приложение
│   └── src/
│       ├── components/  # React компоненты
│       ├── hooks/       # Кастомные хуки
│       ├── api.ts       # API клиент
│       └── types.ts    # TypeScript типы
└── scripts/         # Вспомогательные скрипты
```

## Функциональность

- ✅ Отображение списка фильмов
- ✅ Поиск по названию с debounce
- ✅ Детальная карточка фильма
- ✅ Адаптивная верстка
- ✅ Обработка ошибок
- ✅ Анимации и переходы
- ✅ Оптимизация производительности
- ✅ Шапка с навигацией и выпадающим меню категорий

## Ответы на вопросы

Ответы на теоретические вопросы находятся в файле `answers.txt` в корне проекта.
