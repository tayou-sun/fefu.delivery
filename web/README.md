## Требования
* docker
* docker-compose

## Настройка и запуск версии для разработки

### Запуск всех docker-сервисов
```bash
$ bin/start
```

### Установка зависимостей Composer
```bash
$ bin/composer install
```

### Создание БД и загрузка тестовых данных
```bash
$ bin/console doctrine:migrations:migrate
$ bin/console doctrine:fixtures:load
```

### Дампить .env
```bash
$ bin/composer dump-env dev
```
```bash
$ bin/composer dump-env prod
```

## Запуск всех docker-сервисов для prod
```bash
$ bin/start_prod
```