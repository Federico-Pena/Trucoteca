# Trucoteca

Trucoteca es una aplicación web diseñada para ayudar a jugadores de Truco uruguayo a visualizar y entender mejor sus cartas en la mano. La aplicación ordena automáticamente las cartas de mayor a menor según las reglas del truco y calcula los puntos de Envido y Flor, teniendo en cuenta la muestra y las piezas.

## Características

- Selección de cartas desde una interfaz visual.
- Ordenación automática de cartas según su jerarquía en el truco.
- Cálculo de puntos de Envido y Flor.
- Soporte para el concepto de muestra y piezas (cartas especiales que cambian su valor según la muestra).
- Interfaz amigable para jugadores principiantes.

## Instalación y ejecución

1. Clona este repositorio:

```sh
git clone https://github.com/tu-usuario/truco-helper.git
cd truco-helper
```

2. Instala las dependencias:

```sh
npm install
```

3. Inicia la aplicación:

```sh
npm run dev
```

4. Abre tu navegador y accede a:

```
http://localhost:5173
```

## Uso

1. Selecciona las **tres cartas** de tu mano y la muestra.
2. La aplicación ordenará las cartas de mayor a menor.
3. Se calcularán automáticamente los puntos de **Envido y Flor**.
4. Si alguna carta se convierte en **pieza** por la muestra, se indicará visualmente.

## Reglas implementadas

- **Ordenación de cartas:** Se sigue la jerarquía del Truco uruguayo.
- **Cálculo de Envido:**
  - Se suman las dos cartas más altas del mismo palo + 20.
  - Si no hay dos cartas del mismo palo, se usa la más alta.
- **Cálculo de Flor:**
  - Si hay tres cartas del mismo palo, se suman sus valores + 20.
- **Muestra y Piezas:**
  - Las cartas 2, 4, 5, 10 y 11 del mismo palo que la muestra se convierten en piezas.
  - Si la muestra es una de esas cartas, también el 12 del mismo palo se convierte en pieza.

## Tecnologías utilizadas

- React con TypeScript
- Vite para el desarrollo rápido
- CSS para el diseño de la UI

## Contribuir

Si deseas mejorar la aplicación, puedes hacer un fork del repositorio y enviar un pull request con tus cambios.

1. Haz un fork del repositorio.
2. Crea una rama con tu nueva funcionalidad:

```sh
git checkout -b nueva-funcionalidad
```

3. Realiza tus cambios y haz commit:

```sh
git commit -m "Añadida nueva funcionalidad"
```

4. Sube los cambios y crea un pull request:

```sh
git push origin nueva-funcionalidad
```

## Licencia

Este proyecto está bajo la **Licencia MIT**, lo que significa que puedes usarlo libremente con ciertas condiciones.
