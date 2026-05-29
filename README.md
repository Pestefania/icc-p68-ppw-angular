# PpwAngular21

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.11.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
src/
│
└── app/
    │
    ├── core/                           # Lógica global del negocio
    │   ├── interfaces/                 # Modelos TypeScript para tipar la API
    │   │   └── api-response.interface.ts
    │   └── services/                   # Consumo HTTP y manejo de LocalStorage
    │       └── data.service.ts
    │
    ├── shared/                         # Elementos comunes reutilizables
    │   └── components/
    │       ├── header/                 # Barra de navegación compartida
    │       │   ├── header.component.html
    │       │   └── header.component.ts
    │       ├── footer/                 # Pie de página compartido
    │       │   ├── footer.component.html
    │       │   └── footer.component.ts
    │       └── spinner/                # Indicador de carga (Loading)
    │           ├── spinner.component.html
    │           └── spinner.component.ts
    │
    ├── features/                       # Flujos y pantallas de la aplicación
    │   ├── layout/                     # Contenedor base de la estructura general
    │   │   ├── main-layout.component.html
    │   │   └── main-layout.component.ts
    │   │
    │   ├── home/                       # Pantalla principal (Listado)
    │   │   ├── components/             # Componentes exclusivos de la Home
    │   │   │   ├── hero/               # Banner o panel informativo
    │   │   │   └── card-item/          # Tarjetas individuales para la grilla
    │   │   ├── home.component.html
    │   │   └── home.component.ts
    │   │
    │   └── detail/                     # Pantalla de detalle expandido
    │       ├── home.component.html
    │       └── detail.component.ts
    │
    ├── app.routes.ts                   # Enrutamiento dinámico de la app
    ├── app.config.ts                   # Configuración e inyección de dependencias
    └── app.component.ts                # Componente raíz con el router-outlet