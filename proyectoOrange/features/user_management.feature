
Funcionalidad: Es automatizar el proceso de creación de un nuevo personal en la web de OrangeHRM
(https://opensource-demo.orangehrmlive.com/web/index.php/auth/login).

  Escenario: Añadir un nuevo usuario
    Dado que estoy conectado como administrador
    Cuando navego a la página de gestión de usuarios
    Y añado un nuevo usuario con los siguientes detalles:
      | Nombre de Usuario  | Estado  | Nombre del Empleado | ID del Empleado | Contraseña | Confirmar Contraseña |
      | Juan Roman Riquelme | Admin | FELIX DEL CARPIO    | Admin123       | Admin123   | Admin123            |
    Entonces debería ver el nuevo usuario en la lista de usuarios