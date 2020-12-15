# Proyecto Final 

Facilitar una tienda virtual para la venta de productos y servicios. Proyecto: 19. Sistemas modernos de tratamientos de aguas residuales.

## Sprint Semana IV

Desarrollo de un Sitio web con tienda de e-commerce, para ofrecer las distintas tecnologías en PTAR. La zona de administración debe contar inicialmente con la gestión o CRUD de Artículos y Categorías y, posteriormente se implementará la gestión y autenticación de usuarios.
 
Recopilar los requerimientos de la marca según modelo de negocios para desarrollar el backend y el Frontend del sitio Web (secciones Header, Portafolio, casos de éxito o testimonios y footer.).

## Equipo 28 integrantes:

-	Daniel Alejandro Eslava Avendaño
-	Heywin Hernando Meneses Perez
-	Carlos Eduardo Ruiz Pacheco
-	Michael Arias Fajardo
-   Fabián Tadeo Henao Escalante

## Actividades 

1. Documentar el proyecto. 
> documento de requerimientos, documento del proyecto, casos de uso e historias de usuario
2. construir modulos y tablas
> Categorias, Articulos, Ventas a cliente, Compras a proveedor, Informes, Carrito de compras, Datos de usuarios
3. Documentar las pruebas del proyecto
> documento de pruebas
4. Gestionar las rutas del backend y su consumo
> '/api/auth/signin'
> exitoso: res.status(200).send({ accessToken: token });
> No existe usuario: res.status(404).send('User Not Found.');
> Contraseña invalida: res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
5. Data base mySQL 
> consultas de a traves de sequelize cli. 