### Hexlet tests and linter status:

[![Actions Status](https://github.com/EduardFR/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/EduardFR/frontend-project-46/actions)

![Deeploy badge](https://github.com/EduardFR/frontend-project-46/actions/workflows/nodejs.yml/badge.svg)

[![Maintainability](https://api.codeclimate.com/v1/badges/687fbd6572b681e25d93/maintainability)](https://codeclimate.com/github/EduardFR/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/687fbd6572b681e25d93/test_coverage)](https://codeclimate.com/github/EduardFR/frontend-project-46/test_coverage)

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.
https://ru.hexlet.io/programs/frontend/projects/46

Возможности утилиты:

Поддержка разных входных форматов: yaml, json
Генерация отчета в виде plain text, stylish и json

Требования:
Требуется node.js версия 13.2.0 и выше (проверить версию установленной node возможно командой в терминале node -v)

Установка:

1. Клонируйте данный репозиторий командой: git clone git@github.com:EduardFR/frontend-project-46.git
2. Выполните установку командой: npm link

Аргументы и опции

node bin/gendiff -h

<a href="https://asciinema.org/a/GyvWSBbdaRk7i4PT4cwdye2BA" target="_blank"><img src="https://asciinema.org/a/GyvWSBbdaRk7i4PT4cwdye2BA.svg" /></a>

Рекурсивное сравнение

gendiff **fixtures**/filepath1.json **fixtures**/filepath2.json

<a href="https://asciinema.org/a/lZxAx8e5u9bSziLr484Xuj2M6" target="_blank"><img src="https://asciinema.org/a/lZxAx8e5u9bSziLr484Xuj2M6.svg" /></a>

Сравнение плоских файлов (JSON)

gendiff **fixtures**/filepath1.json **fixtures**/filepath2.json

<a href="https://asciinema.org/a/KcIiwKsLFinvxpzGeIHlQnodv" target="_blank"><img src="https://asciinema.org/a/KcIiwKsLFinvxpzGeIHlQnodv.svg" /></a>

Сравнение плоских файлов (yaml)

gendiff **fixtures**/filepath1.yaml **fixtures**/filepath2.yaml

<a href="https://asciinema.org/a/cQy2ctDqyT37C3D1SD6548BcL" target="_blank"><img src="https://asciinema.org/a/cQy2ctDqyT37C3D1SD6548BcL.svg" /></a>

Плоский формат

gendiff -f plain **fixtures**/filepath1.yaml **fixtures**/filepath2.yaml

<a href="https://asciinema.org/a/1gFHk5osSD2z7SVmHb1xgmeQf" target="_blank"><img src="https://asciinema.org/a/1gFHk5osSD2z7SVmHb1xgmeQf.svg" /></a>

Вывод в json

gendiff --format json **fixtures**/filepath1.json **fixtures**/filepath2.json

<a href="https://asciinema.org/a/Fs2yWsFSfdReR26qnwWtYDRQe" target="_blank"><img src="https://asciinema.org/a/Fs2yWsFSfdReR26qnwWtYDRQe.svg" /></a>
