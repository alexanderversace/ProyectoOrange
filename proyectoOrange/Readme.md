Indica la técnica de diseño de caso de prueba utilizado

Para el proyecto descrito, se está utilizando la técnica de diseño de casos de prueba Basada en Comportamiento (Behavior-Driven Development, BDD). Esta técnica se enfoca en la colaboración entre desarrolladores, testers y stakeholders para definir cómo debería comportarse una aplicación en términos de ejemplos concretos.

Para detallarlo un poco mas las tecnicas fueron las siguientes:

Técnica de Particiones de Equivalencia 
    Aplicación en el ProyectoOrange:
        Datos Válidos e Inválidos: Para los campos de entrada como nombre de usuario, ID del empleado, y contraseñas, se crean particiones válidas e inválidas para probar la funcionalidad del sistema bajo diferentes condiciones.


Técnica de Análisis de Valores Límite
    Aplicación en el ProyectoOrange:
        Valores de Entrada: Verifica los campos como el ID del empleado en los límites del rango permitido, y también casos fuera del rango para asegurar que el sistema maneja correctamente las entradas extremas.


Técnica de Pruebas de Decisión 
     Aplicación en el ProyectoOrange:
        Condiciones Lógicas: Prueba las decisiones lógicas involucradas en la adición de un nuevo usuario, como validaciones de entrada y manejo de errores.


Técnica de Pruebas de Estado 
     Aplicación en el ProyectoOrange:
        Estados del Usuario: Modela los diferentes estados posibles para un usuario en el sistema (por ejemplo, activo, inactivo) y prueba las transiciones entre estos estados.


los casos de prueba mapeados fueron los siguientes:

 Feature: Registro de Usuarios

Scenario: Agregar un nuevo usuario con datos válidos
    Given Estoy logueado como administrador
    When Navego a la página de gestión de usuarios
    And Agrego un nuevo usuario con los siguientes detalles:
      | Username       | Status  | Employee Name    | Employee ID | Password   | Confirm Password |
      | Juan Roman Riquelme | Admin | FELIX DEL CARPIO | Admin123   | Admin123   | Admin123        |
    Then Debería ver el nuevo usuario en la lista de usuarios


  Scenario: Intentar agregar un usuario con datos inválidos
    Given Estoy logueado como administrador
    When Navego a la página de gestión de usuarios
    And Intento agregar un nuevo usuario con los siguientes detalles:
      | Username       | Status  | Employee Name    | Employee ID | Password   | Confirm Password |
      | Juan Roman Riquelme | Admin | FELIX DEL CARPIO | InvalidID   | Admin123   | Admin123        |
    Then Debería ver un mensaje de error sobre el ID inválido


  Scenario: Seleccionar un estado en el dropdown de Status
    Given Estoy logueado como administrador
    When Navego a la página de gestión de usuarios
    And Agrego un nuevo usuario con los siguientes detalles:
      | Username       | Status  | Employee Name    | Employee ID | Password   | Confirm Password |
      | Juan Roman Riquelme | Admin | FELIX DEL CARPIO | Admin123   | Admin123   | Admin123        |
    Then Debería poder seleccionar el estado "Admin" en el dropdown de Status


  Scenario: Intentar agregar un nuevo usuario sin llenar campos obligatorios
    Given Estoy logueado como administrador
    When Navego a la página de gestión de usuarios
    And Intento agregar un nuevo usuario con los siguientes detalles:
      | Username       | Status  | Employee Name    | Employee ID | Password   | Confirm Password |
      |                | Admin |                  |             |            |                  |
    Then Debería ver mensajes de error sobre los campos obligatorios