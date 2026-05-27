// Base de datos de los 5 procedimientos
const proceduresData = {
    'procedure-1': {
        title: 'Fusil Fx',
        modelSrc: 'fusil_fx.glb?v=5',
        categories: [
            {
                name: "Desarme 1/er. Escalón",
                steps: [
                    { title: '1. Cargador', desc: 'Retirar el cargador del arma presionando la retenida y extrayéndolo hacia abajo.' },
                    { title: '2. Verificación de recámara', desc: 'Comprobar visual y físicamente que no exista cartucho en la recámara, aplicando medidas de seguridad.' },
                    { title: '3. Portafusil', desc: 'Desacoplar el portafusil retirándolo de sus puntos de sujeción.' },
                    { title: '4. Perno de sujeción del guardamano', desc: 'Extraer el perno de sujeción del guardamano presionándolo lateralmente.' },
                    { title: '5. Guardamano', desc: 'Deslizar el guardamano hacia el frente hasta retirarlo completamente del arma.' },
                    { title: '6. Grapa del cajón de mecanismos', desc: 'Extraer la grapa utilizando un perno o herramienta similar como apoyo.' },
                    { title: '7. Pernos del arma', desc: 'Retirar los pernos de sujeción principales del arma.' },
                    { title: '8. Empuñadura', desc: 'Jalar la empuñadura hacia abajo para separarla del cajón de mecanismos.' },
                    { title: '9. Culata', desc: 'Plegar la culata para facilitar la manipulación del arma.' },
                    { title: '10. Caja de fijación', desc: 'Extraer la caja de fijación del interior del arma.' },
                    { title: '11. Palanca de armar', desc: 'Llevar la palanca hacia atrás hasta el tope y retirarla del alojamiento.' },
                    { title: '12. Grupo de cierre', desc: 'Extraer el grupo de cierre inclinando ligeramente el arma hacia arriba.' },
                    { title: '13. Perno de seguridad del percutor', desc: 'Retirar el perno de seguridad del grupo de cierre.' },
                    { title: '14. Percutor', desc: 'Extraer el percutor del interior del conjunto de cierre.' }
                ]
            },
            {
                name: "Arme 1/er. Escalón",
                steps: [
                    { title: '1. Percutor', desc: 'Introducir el percutor alineando los orificios del soporte y la cabeza de cierre.' },
                    { title: '2. Perno de seguridad', desc: 'Insertar el perno de seguridad en su alojamiento para asegurar el percutor.' },
                    { title: '3. Grupo de cierre', desc: 'Colocar el grupo de cierre dentro del cajón de mecanismos con la cabeza hacia el frente.' },
                    { title: '4. Palanca de armar', desc: 'Insertar la palanca de armar y llevarla hacia atrás hasta que encastre, luego regresarla al frente.' },
                    { title: '5. Caja de fijación', desc: 'Colocar la caja de fijación en su posición dentro del arma.' },
                    { title: '6. Culata', desc: 'Desplegar la culata hasta su posición de uso.' },
                    { title: '7. Empuñadura', desc: 'Insertar la empuñadura con el martillo abatido, alineando correctamente el conjunto.' },
                    { title: '8. Pernos de sujeción', desc: 'Colocar los pernos, verificando la correcta posición del perno largo.' },
                    { title: '9. Grapa', desc: 'Insertar la grapa asegurando el sistema de cierre al frente.' },
                    { title: '10. Guardamano', desc: 'Colocar el guardamano y fijarlo con su perno de sujeción.' },
                    { title: '11. Portafusil', desc: 'Instalar nuevamente el portafusil en sus puntos de anclaje.' },
                    { title: '12. Cargador', desc: 'Insertar el cargador en el arma hasta asegurar su fijación.' }
                ]
            },
            {
                name: "Desarme 2/o. Escalón",
                steps: [
                    { title: '1. Cargador', desc: 'Retirar el cargador del arma presionando la retenida y extrayéndolo hacia abajo.' },
                    { title: '2. Verificación de recámara', desc: 'Comprobar visual y físicamente que no exista cartucho en la recámara, aplicando medidas de seguridad.' },
                    { title: '3. Portafusil', desc: 'Desacoplar el portafusil retirándolo de sus puntos de sujeción.' },
                    { title: '4. Perno de sujeción del guardamano', desc: 'Extraer el perno de sujeción del guardamano presionándolo lateralmente.' },
                    { title: '5. Guardamano', desc: 'Deslizar el guardamano hacia el frente hasta retirarlo completamente del arma.' },
                    { title: '6. Grapa del cajón de mecanismos', desc: 'Extraer la grapa utilizando un perno o herramienta similar como apoyo.' },
                    { title: '7. Pernos del arma', desc: 'Retirar los pernos de sujeción principales del arma.' },
                    { title: '8. Empuñadura', desc: 'Jalar la empuñadura hacia abajo para separarla del cajón de mecanismos.' },
                    { title: '9. Culata', desc: 'Plegar la culata para facilitar la manipulación del arma.' },
                    { title: '10. Caja de fijación', desc: 'Extraer la caja de fijación del interior del arma.' },
                    { title: '11. Palanca de armar', desc: 'Llevar la palanca hacia atrás hasta el tope y retirarla del alojamiento.' },
                    { title: '12. Grupo de cierre', desc: 'Extraer el grupo de cierre inclinando ligeramente el arma hacia arriba.' },
                    { title: '13. Perno de seguridad del percutor', desc: 'Retirar el perno de seguridad del grupo de cierre.' },
                    { title: '14. Percutor', desc: 'Extraer el percutor del interior del conjunto de cierre.' },
                    { title: '15. Pasador elástico', desc: 'Retirar el pasador elástico utilizando un botador de 2.5 mm.' },
                    { title: '16. Botador y vástago pistón', desc: 'Quitar el botador para extraer el vástago pistón, resorte de empuje y la camisa del vástago, evitando que el vástago salga impulsado por la acción del resorte.' },
                    { title: '17. Inspección de componentes', desc: 'Verificar que las piezas no presenten suciedad, desgaste o daños antes del armado.' }
                ]
            },
            {
                name: "Arme 2/o. Escalón",
                steps: [
                    { title: '1. Resorte de empuje y camisa del vástago', desc: 'Colocar el resorte de empuje y la camisa del vástago sobre el vástago pistón.' },
                    { title: '2. Ensamble en soporte de cierre', desc: 'Ubicar el ensamble en el tope del perno de mando, alineando el barreno del vástago pistón con el barreno del soporte de cierre.' },
                    { title: '3. Pasador elástico', desc: 'Insertar el pasador elástico en el soporte de cierre para asegurar el conjunto.' },
                    { title: '4. Percutor', desc: 'Introducir el percutor alineando los orificios del soporte y la cabeza de cierre.' },
                    { title: '5. Perno de seguridad', desc: 'Insertar el perno de seguridad en su alojamiento para asegurar el percutor.' },
                    { title: '6. Grupo de cierre', desc: 'Colocar el grupo de cierre dentro del cajón de mecanismos con la cabeza hacia el frente.' },
                    { title: '7. Palanca de armar', desc: 'Insertar la palanca de armar y llevarla hacia atrás hasta que encastre, luego regresarla al frente.' },
                    { title: '8. Caja de fijación', desc: 'Colocar la caja de fijación en su posición dentro del arma.' },
                    { title: '9. Culata', desc: 'Desplegar la culata hasta su posición de uso.' },
                    { title: '10. Empuñadura', desc: 'Insertar la empuñadura con el martillo abatido, alineando correctamente el conjunto.' },
                    { title: '11. Pernos de sujeción', desc: 'Colocar los pernos, verificando la correcta posición del perno largo.' },
                    { title: '12. Grapa', desc: 'Insertar la grapa asegurando el sistema de cierre al frente.' },
                    { title: '13. Guardamano', desc: 'Colocar el guardamano y fijarlo con su perno de sujeción.' },
                    { title: '14. Portafusil', desc: 'Instalar nuevamente el portafusil en sus puntos de anclaje.' },
                    { title: '15. Cargador', desc: 'Insertar el cargador en el arma hasta asegurar su fijación.' }
                ]
            }
        ],
        alert: 'Asegúrese de realizar estas operaciones en un área segura y despejada.'
    },
    'procedure-2': {
        title: 'AR-15',
        modelSrc: 'ar-15_assault_rifle_fbx.glb?v=5',
        categories: [
            {
                name: "Desarme 1/er. Escalón",
                steps: [
                    { title: '1. Cargador', desc: 'Presionar la retenida del cargador y retirarlo con la mano contraria.' },
                    { title: '2. Verificación de recámara', desc: 'Llevar la palanca de maniobras hacia atrás y comprobar que no haya cartucho.' },
                    { title: '3. Seguro', desc: 'Colocar el selector de tiro en posición de seguro (“SAFE”).' },
                    { title: '4. Perno de desacerrojado', desc: 'Oprimir el perno lateral hasta el tope para permitir la apertura del arma.' },
                    { title: '5. Apertura del arma', desc: 'Separar el cajón de mecanismos inclinando el cañón hacia abajo.' },
                    { title: '6. Corredera (porta cerrojo)', desc: 'Jalar la palanca de maniobras hacia atrás y extraer la corredera del cajón.' },
                    { title: '7. Palanca de maniobras', desc: 'Destrabarla con un movimiento hacia arriba y hacia atrás hasta retirarla.' },
                    { title: '8. Chaveta del cerrojo', desc: 'Presionar la chaveta con herramienta (cartucho) y extraerla lateralmente.' },
                    { title: '9. Percutor', desc: 'Inclinar la corredera y dejar salir el percutor del conjunto.' },
                    { title: '10. Guía del cerrojo', desc: 'Alinear la guía longitudinalmente y retirarla hacia afuera.' },
                    { title: '11. Cerrojo', desc: 'Extraer el cerrojo deslizándolo hacia adelante fuera de la corredera.' }
                ]
            },
            {
                name: "Arme 1/er. Escalón",
                steps: [
                    { title: '1. Cerrojo', desc: 'Insertar el cerrojo dentro de la corredera en su posición correcta.' },
                    { title: '2. Guía del cerrojo', desc: 'Colocar la guía alineándola con el conjunto del cerrojo.' },
                    { title: '3. Percutor', desc: 'Introducir el percutor dentro del conjunto hasta el fondo.' },
                    { title: '4. Chaveta del cerrojo', desc: 'Insertar la chaveta asegurando el percutor en su lugar.' },
                    { title: '5. Palanca de maniobras', desc: 'Insertar la palanca en su guía dentro del cajón de mecanismos.' },
                    { title: '6. Corredera (porta cerrojo)', desc: 'Introducir la corredera en el cajón de mecanismos hasta el fondo.' },
                    { title: '7. Cierre del arma', desc: 'Unir ambas partes del arma y asegurar el perno de desacerrojado.' },
                    { title: '8. Verificación de funcionamiento', desc: 'Accionar la palanca de maniobras y comprobar el correcto armado.' },
                    { title: '9. Cargador', desc: 'Insertar el cargador hasta que quede fijo en su alojamiento.' }
                ]
            }
        ],
        alert: null
    },
    'procedure-3': {
        title: 'HKG3',
        modelSrc: 'hkg3.glb?v=5',
        categories: [
            {
                name: "Desarme 1/er escalón",
                steps: [
                    { title: '1. Selector de tiro y seguro', desc: 'Colocar el selector de cadencia en posición de seguro “S”.' },
                    { title: '2. Verificación de recámara', desc: 'Realizar las medidas de seguridad y verificar que no exista cartucho en la recámara.' },
                    { title: '3. Cargador', desc: 'Presionar la retenida del cargador hacia adelante y hacia afuera para desmontarlo del arma.' },
                    { title: '4. Portafusil', desc: 'Retirar el portafusil desenganchándolo de la anilleta.' },
                    { title: '5. Pernos de sujeción de la caja de fijación', desc: 'Retirar los pernos de sujeción de la caja de fijación y alojarlos en los remaches huecos de la culata.' },
                    { title: '6. Caja de fijación y culata', desc: 'Retirar la caja de fijación junto con la culata y separarla del arma.' },
                    { title: '7. Empuñadura', desc: 'Mover la empuñadura hacia abajo para facilitar su desmontaje.' },
                    { title: '8. Perno de fijación de la empuñadura', desc: 'Sacar el perno de fijación y separar la empuñadura del arma.' },
                    { title: '9. Cerrojo', desc: 'Retirar el cerrojo utilizando la palanca de maniobras y extraerlo del cajón de mecanismos.' },
                    { title: '10. Palanca de maniobras', desc: 'Empujar la palanca de maniobras hacia adelante hasta su posición inicial.' },
                    { title: '11. Perno de sujeción del guardamano', desc: 'Retirar el perno de sujeción del guardamano.' },
                    { title: '12. Guardamano', desc: 'Desmontar el guardamano basculándolo desde la parte superior y jalándolo hacia arriba.' }
                ]
            },
            {
                name: "Arme 1/er. Escalón",
                steps: [
                    { title: '1. Guardamano', desc: 'Colocar el guardamano en su posición basculándolo hacia el arma hasta ajustarlo correctamente.' },
                    { title: '2. Perno de sujeción del guardamano', desc: 'Insertar el perno de sujeción para asegurar el guardamano.' },
                    { title: '3. Palanca de maniobras', desc: 'Verificar que la palanca de maniobras se encuentre en su posición hacia adelante.' },
                    { title: '4. Cerrojo', desc: 'Insertar el cerrojo utilizando la palanca de maniobras hasta colocarlo en el cajón de mecanismos.' },
                    { title: '5. Empuñadura', desc: 'Colocar la empuñadura alineándola correctamente con el arma.' },
                    { title: '6. Perno de fijación de la empuñadura', desc: 'Insertar el perno de fijación para asegurar la empuñadura.' },
                    { title: '7. Caja de fijación y culata', desc: 'Colocar la caja de fijación junto con la culata en su posición correspondiente.' },
                    { title: '8. Pernos de sujeción de la caja de fijación', desc: 'Insertar los pernos de sujeción asegurando correctamente la caja de fijación.' },
                    { title: '9. Portafusil', desc: 'Instalar el portafusil enganchándolo en la anilleta.' },
                    { title: '10. Cargador', desc: 'Insertar el cargador en el arma hasta asegurar su fijación.' },
                    { title: '11. Verificación de funcionamiento', desc: 'Jalar la palanca de maniobras hacia atrás y comprobar el correcto funcionamiento del arma.' }
                ]
            },
            {
                name: "Desarme 2/o escalón",
                steps: [
                    { title: '1. Selector de tiro y seguro', desc: 'Colocar el selector de cadencia en posición de seguro “S”.' },
                    { title: '2. Verificación de recámara', desc: 'Realizar las medidas de seguridad y verificar que no exista cartucho en la recámara.' },
                    { title: '3. Cargador', desc: 'Presionar la retenida del cargador hacia adelante y hacia afuera para desmontarlo del arma.' },
                    { title: '4. Portafusil', desc: 'Retirar el portafusil desenganchándolo de la anilleta.' },
                    { title: '5. Pernos de sujeción de la caja de fijación', desc: 'Retirar los pernos de sujeción de la caja de fijación y alojarlos en los remaches huecos de la culata.' },
                    { title: '6. Caja de fijación y culata', desc: 'Retirar la caja de fijación junto con la culata y separarla del arma.' },
                    { title: '7. Empuñadura', desc: 'Mover la empuñadura hacia abajo para facilitar su desmontaje.' },
                    { title: '8. Perno de fijación de la empuñadura', desc: 'Sacar el perno de fijación y separar la empuñadura del arma.' },
                    { title: '9. Cerrojo', desc: 'Retirar el cerrojo utilizando la palanca de maniobras y extraerlo del cajón de mecanismos.' },
                    { title: '10. Palanca de maniobras', desc: 'Empujar la palanca de maniobras hacia adelante hasta su posición inicial.' },
                    { title: '11. Perno de sujeción del guardamano', desc: 'Retirar el perno de sujeción del guardamano.' },
                    { title: '12. Guardamano', desc: 'Desmontar el guardamano basculándolo desde la parte superior y jalándolo hacia arriba.' },
                    { title: '13. Cantonera', desc: 'Introducir un desarmador de boca ancha en la junta de unión de la cantonera y golpear ligeramente hasta que penetre en la unión; girar ligeramente el desarmador y jalar la cantonera hacia atrás de la culata, liberando la presión de las muelles de fijación.' },
                    { title: '14. Tornillos de la caja del amortiguador', desc: 'Desmontar los tornillos de la caja del amortiguador utilizando la herramienta adecuada.' },
                    { title: '15. Tornillo de fijación del amortiguador', desc: 'Destornillar el tornillo de fijación del amortiguador con un desarmador apropiado y separar el conjunto.' }
                ]
            },
            {
                name: "Arme 2/o. Escalón",
                steps: [
                    { title: '1. Tornillo de fijación del amortiguador', desc: 'Colocar el amortiguador en su posición e insertar el tornillo de fijación, asegurándolo firmemente.' },
                    { title: '2. Tornillos de la caja del amortiguador', desc: 'Instalar y apretar firmemente los tornillos de la caja del amortiguador.' },
                    { title: '3. Cantonera', desc: 'Colocar la cantonera en la culata presionándola hasta que las muelles de fijación queden aseguradas en su alojamiento.' },
                    { title: '4. Guardamano', desc: 'Colocar el guardamano en su posición basculándolo hacia el arma hasta ajustarlo correctamente.' },
                    { title: '5. Perno de sujeción del guardamano', desc: 'Insertar el perno de sujeción para asegurar el guardamano.' },
                    { title: '6. Palanca de maniobras', desc: 'Verificar que la palanca de maniobras se encuentre en su posición hacia adelante.' },
                    { title: '7. Cerrojo', desc: 'Insertar el cerrojo utilizando la palanca de maniobras hasta colocarlo en el cajón de mecanismos.' },
                    { title: '8. Empuñadura', desc: 'Colocar la empuñadura alineándola correctamente con el arma.' },
                    { title: '9. Perno de fijación de la empuñadura', desc: 'Insertar el perno de fijación para asegurar la empuñadura.' },
                    { title: '10. Caja de fijación y culata', desc: 'Colocar la caja de fijación junto con la culata en su posición correspondiente.' },
                    { title: '11. Pernos de sujeción de la caja de fijación', desc: 'Insertar los pernos de sujeción asegurando correctamente la caja de fijación.' },
                    { title: '12. Portafusil', desc: 'Instalar el portafusil enganchándolo en la anilleta.' },
                    { title: '13. Cargador', desc: 'Insertar el cargador en el arma hasta asegurar su fijación.' },
                    { title: '14. Verificación de funcionamiento', desc: 'Jalar la palanca de maniobras hacia atrás y comprobar el correcto funcionamiento del arma.' }
                ]
            }
        ],
        alert: null
    },
    'procedure-4': {
        title: 'MINIMI MK3',
        modelSrc: 'Minimi-Mk3-Black.glb?v=5',
        categories: [
            {
                name: "Desarme 1/er. Escalón",
                steps: [
                    { title: '1. Cinta de munición / caja alimentadora', desc: 'Retirar la cinta de munición o caja alimentadora del arma asegurando que no queden cartuchos en el sistema.' },
                    { title: '2. Verificación de recámara', desc: 'Abrir la tapa superior y comprobar visualmente que no haya cartucho en la recámara.' },
                    { title: '3. Tapa superior', desc: 'Presionar el seguro de la tapa y levantarla completamente.' },
                    { title: '4. Cañón', desc: 'Accionar la palanca de liberación del cañón y extraerlo hacia adelante.' },
                    { title: '5. Grupo de cierre', desc: 'Jalar la palanca de armar hacia atrás y extraer el conjunto del grupo de cierre.' },
                    { title: '6. Resorte recuperador', desc: 'Retirar el resorte recuperador del interior del arma con cuidado.' },
                    { title: '7. Porta cierre / corredera', desc: 'Separar el porta cierre del conjunto deslizándolo hacia afuera.' },
                    { title: '8. Cerrojo', desc: 'Extraer el cerrojo del porta cierre.' },
                    { title: '9. Pistón de gases', desc: 'Retirar el pistón de gases desde la parte frontal del arma.' },
                    { title: '10. Bípode (si aplica)', desc: 'Desplegar y retirar el bípode si es necesario para mantenimiento.' }
                ]
            },
            {
                name: "Arme 1/er. Escalón",
                steps: [
                    { title: '1. Pistón de gases', desc: 'Insertar el pistón de gases en su alojamiento frontal.' },
                    { title: '2. Cerrojo', desc: 'Colocar el cerrojo dentro del porta cierre asegurando su correcta alineación.' },
                    { title: '3. Porta cierre / corredera', desc: 'Introducir el porta cierre en el cajón de mecanismos.' },
                    { title: '4. Resorte recuperador', desc: 'Colocar el resorte recuperador en su posición dentro del conjunto.' },
                    { title: '5. Grupo de cierre', desc: 'Insertar el grupo de cierre en el arma empujándolo hasta su posición.' },
                    { title: '6. Cañón', desc: 'Insertar el cañón en su alojamiento y asegurar con la palanca de bloqueo.' },
                    { title: '7. Tapa superior', desc: 'Cerrar la tapa superior hasta que quede asegurada.' },
                    { title: '8. Verificación de funcionamiento', desc: 'Accionar la palanca de armar para comprobar el correcto funcionamiento.' },
                    { title: '9. Cinta de munición / caja alimentadora', desc: 'Colocar la cinta de munición o caja alimentadora en su posición.' },
                    { title: '10. Bípode (si aplica)', desc: 'Colocar o ajustar el bípode según sea necesario.' }
                ]
            }
        ],
        alert: null
    },
    'procedure-5': {
        title: 'MK19',
        modelSrc: 'MK19.glb?v=5',
        categories: [
            {
                name: "Desarme 1/er. Escalón",
                steps: [
                    { title: '1. Tolva de alimentación', desc: 'Presionar los pernos de sujeción y extraer la tolva hacia arriba.' },
                    { title: '2. Grupo del cerrojo y placa posterior', desc: 'Retirar el perno de la placa posterior haciendo palanca y extraer el conjunto completo.' },
                    { title: '3. Palanca de avance secundario', desc: 'Desacoplar la palanca retirándola de su eje de movimiento.' },
                    { title: '4. Corredera de avance', desc: 'Extraer la corredera deslizándola hacia afuera del mecanismo.' },
                    { title: '5. Tapa superior', desc: 'Levantar y retirar la tapa superior del arma.' },
                    { title: '6. Placa de la corredera de avance', desc: 'Separar la placa del sistema de avance manualmente.' },
                    { title: '7. Palanca de avance primario y leva vertical', desc: 'Retirar ambos elementos del sistema de alimentación.' },
                    { title: '8. Guía de alimentación', desc: 'Extraer la guía deslizándola fuera del conjunto.' },
                    { title: '9. Bloque de posición de la granada', desc: 'Retirar el bloque del área de alimentación del arma.' },
                    { title: '10. Pistón amortiguador de la granada', desc: 'Extraer el pistón del sistema de absorción.' },
                    { title: '11. Palancas de preparación', desc: 'Retirar ambas palancas jalándolas hacia afuera.' },
                    { title: '12. Muelle real', desc: 'Extraer el muelle principal del sistema con precaución.' }
                ]
            },
            {
                name: "Arme 1/er. Escalón",
                steps: [
                    { title: '1. Muelle real', desc: 'Colocar el muelle en su alojamiento asegurando su correcta posición.' },
                    { title: '2. Palancas de preparación', desc: 'Insertar las palancas en su eje hasta fijarlas correctamente.' },
                    { title: '3. Pistón amortiguador', desc: 'Colocar el pistón en su compartimiento del sistema.' },
                    { title: '4. Bloque de posición de la granada', desc: 'Instalar el bloque en la zona de alimentación.' },
                    { title: '5. Guía de alimentación', desc: 'Insertar la guía alineándola con el sistema de avance.' },
                    { title: '6. Palanca de avance primario y leva', desc: 'Colocar ambos componentes asegurando su acoplamiento.' },
                    { title: '7. Placa de corredera', desc: 'Fijar la placa en su posición dentro del sistema.' },
                    { title: '8. Tapa superior', desc: 'Colocar la tapa y asegurar su cierre.' },
                    { title: '9. Corredera de avance', desc: 'Insertar la corredera en sus rieles hasta el fondo.' },
                    { title: '10. Palanca de avance secundario', desc: 'Colocar la palanca en su eje de operación.' },
                    { title: '11. Grupo del cerrojo y placa posterior', desc: 'Insertar el conjunto y asegurar con el perno correspondiente.' },
                    { title: '12. Tolva de alimentación', desc: 'Colocar la tolva y fijarla con sus pernos de sujeción.' }
                ]
            },
            {
                name: "Desarme 2/o. Escalón",
                steps: [
                    { title: '1. Tolva de alimentación', desc: 'Presionar los pernos de sujeción y extraer la tolva hacia arriba.' },
                    { title: '2. Grupo del cerrojo y placa posterior', desc: 'Retirar el perno de la placa posterior haciendo palanca y extraer el conjunto completo.' },
                    { title: '3. Palanca de avance secundario', desc: 'Desacoplar la palanca retirándola de su eje de movimiento.' },
                    { title: '4. Corredera de avance', desc: 'Extraer la corredera deslizándola hacia afuera del mecanismo.' },
                    { title: '5. Tapa superior', desc: 'Levantar y retirar la tapa superior del arma.' },
                    { title: '6. Placa de la corredera de avance', desc: 'Separar la placa del sistema de avance manualmente.' },
                    { title: '7. Palanca de avance primario y leva vertical', desc: 'Retirar ambos elementos del sistema de alimentación.' },
                    { title: '8. Guía de alimentación', desc: 'Extraer la guía deslizándola fuera del conjunto.' },
                    { title: '9. Bloque de posición de la granada', desc: 'Retirar el bloque del área de alimentación del arma.' },
                    { title: '10. Pistón amortiguador de la granada', desc: 'Extraer el pistón del sistema de absorción.' },
                    { title: '11. Palancas de preparación', desc: 'Retirar ambas palancas jalándolas hacia afuera.' },
                    { title: '12. Muelle real', desc: 'Extraer el muelle principal del sistema con precaución.' },
                    { title: '13. Varilla interna y arandela frontal', desc: 'Retirar de la placa posterior la varilla interna junto con la arandela frontal.' },
                    { title: '14. Resorte de retroceso', desc: 'Extraer el resorte de retroceso del conjunto, manteniendo control para evitar liberación brusca.' }
                ]
            },
            {
                name: "Arme 2/o. Escalón",
                steps: [
                    { title: '1. Resorte de retroceso', desc: 'Colocar el resorte de retroceso en su alojamiento dentro del conjunto, asegurando su correcta posición.' },
                    { title: '2. Varilla interna y arandela frontal', desc: 'Insertar la varilla interna junto con la arandela frontal en la placa posterior, alineando correctamente sus componentes.' },
                    { title: '3. Muelle real', desc: 'Colocar el muelle en su alojamiento asegurando su correcta posición.' },
                    { title: '4. Palancas de preparación', desc: 'Insertar las palancas en su eje hasta fijarlas correctamente.' },
                    { title: '5. Pistón amortiguador', desc: 'Colocar el pistón en su compartimiento del sistema.' },
                    { title: '6. Bloque de posición de la granada', desc: 'Instalar el bloque en la zona de alimentación.' },
                    { title: '7. Guía de alimentación', desc: 'Insertar la guía alineándola con el sistema de avance.' },
                    { title: '8. Palanca de avance primario y leva', desc: 'Colocar ambos componentes asegurando su acoplamiento.' },
                    { title: '9. Placa de corredera', desc: 'Fijar la placa en su posición dentro del sistema.' },
                    { title: '10. Tapa superior', desc: 'Colocar la tapa y asegurar su cierre.' },
                    { title: '11. Corredera de avance', desc: 'Insertar la corredera en sus rieles hasta el fondo.' },
                    { title: '12. Palanca de avance secundario', desc: 'Colocar la palanca en su eje de operación.' },
                    { title: '13. Grupo del cerrojo y placa posterior', desc: 'Insertar el conjunto y asegurar con el perno correspondiente.' },
                    { title: '14. Tolva de alimentación', desc: 'Colocar la tolva y fijarla con sus pernos de sujeción.' }
                ]
            }
        ],
        alert: null
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const screenMenu = document.getElementById('screen-menu');
    const screenProcedure = document.getElementById('screen-procedure');
    const viewer3D = document.getElementById('main-3d-viewer');
    const procTitle = document.getElementById('proc-title');
    const procDetails = document.getElementById('proc-details');
    const btnBack = document.getElementById('btn-back');

    // Navegación hacia Procedimiento
    document.querySelectorAll('.menu-card').forEach(card => {
        card.addEventListener('click', () => {
            const procedureId = card.getAttribute('data-target');
            loadProcedure(procedureId);
            
            // Animación de transición
            screenMenu.classList.remove('active-screen');
            screenMenu.classList.add('left-screen');
            screenProcedure.classList.add('active-screen');
        });
    });

    // Navegación Volver
    btnBack.addEventListener('click', () => {
        screenProcedure.classList.remove('active-screen');
        screenMenu.classList.remove('left-screen');
        screenMenu.classList.add('active-screen');
    });

    // Función para Cargar los Datos
    function loadProcedure(id) {
        const data = proceduresData[id];
        if (!data) return;

        // Set Texts
        procTitle.textContent = data.title;
        
        // Remove static camera orbit so different models auto-frame correctly!
        viewer3D.cameraOrbit = "auto auto auto"; 
        viewer3D.removeAttribute("camera-orbit"); // Reset native framing

        // Retrasamos la inyección del Modelo 3D para que NO congele la animación de transición CSS
        setTimeout(() => {
            viewer3D.src = data.modelSrc;
        }, 350); 

        // Render Panel Steps
        let htmlContent = '';
        
        // Agregar alerta si existe
        if (data.alert) {
            htmlContent += `
                <div class="alert-box">
                    <span class="icon">⚠️</span>
                    <p><strong>Cuidado:</strong> ${data.alert}</p>
                </div>
            `;
        }

        // Render Categories
        if (data.categories) {
            data.categories.forEach(cat => {
                htmlContent += `<h3 style="color: var(--primary); margin-top: 20px; margin-bottom: 10px; border-bottom: 1px solid var(--border); padding-bottom: 5px;">${cat.name}</h3>`;
                cat.steps.forEach((step, index) => {
                    htmlContent += `
                        <div class="step-card">
                            <div class="step-number">${index + 1}</div>
                            <div class="step-text">
                                <h4>${step.title}</h4>
                                <p>${step.desc}</p>
                            </div>
                        </div>
                    `;
                });
            });
        }

        // Add bottom padding
        htmlContent += `<div style="height: 20px;"></div>`;
        
        procDetails.innerHTML = htmlContent;
    }

    // Modal para PDFs
    const pdfModal = document.getElementById('pdf-modal');
    const pdfViewer = document.getElementById('pdf-viewer');
    const btnClosePdf = document.getElementById('btn-close-pdf');
    const pdfModalTitle = document.getElementById('pdf-modal-title');

    document.querySelectorAll('.material-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evitar comportamiento predeterminado
            const pdfUrl = encodeURI(link.getAttribute('href'));
            const title = link.textContent.trim();
            
            pdfModalTitle.textContent = title;
            pdfViewer.src = pdfUrl;
            
    // Botón de fallback para móviles que no soportan iframe PDF
            let extBtn = document.getElementById('btn-external-pdf');
            if (!extBtn) {
                extBtn = document.createElement('a');
                extBtn.id = 'btn-external-pdf';
                extBtn.className = 'btn-close-pdf'; // Reusar estilo
                extBtn.style.width = 'auto';
                extBtn.style.padding = '0 10px';
                extBtn.style.fontSize = '14px';
                extBtn.style.textDecoration = 'none';
                extBtn.innerHTML = 'Abrir ↗';
                extBtn.target = '_blank';
                document.querySelector('#pdf-modal .pdf-modal-header').insertBefore(extBtn, btnClosePdf);
            }
            extBtn.href = pdfUrl;

            pdfModal.classList.add('active');
        });
    });

    btnClosePdf.addEventListener('click', () => {
        pdfModal.classList.remove('active');
        setTimeout(() => {
            pdfViewer.src = '';
        }, 300);
    });

    // Modal para Videos
    const videoModal = document.getElementById('video-modal');
    const videoViewer = document.getElementById('video-viewer');
    const btnCloseVideo = document.getElementById('btn-close-video');
    const videoModalTitle = document.getElementById('video-modal-title');

    document.querySelectorAll('.video-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            e.stopPropagation(); // Evitar que el evento dispare el del PDF si se mezclan
            
            const videoUrl = encodeURI(link.getAttribute('href'));
            const title = link.textContent.trim();
            
            videoModalTitle.textContent = title;
            videoViewer.src = videoUrl;
            videoModal.classList.add('active');
            videoViewer.play().catch(e => console.log('Auto-play prevent:', e));
        });
    });

    btnCloseVideo.addEventListener('click', () => {
        videoModal.classList.remove('active');
        videoViewer.pause();
        setTimeout(() => {
            videoViewer.src = '';
        }, 300);
    });
});
