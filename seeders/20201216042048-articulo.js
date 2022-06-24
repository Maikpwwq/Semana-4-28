'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('articulos', [
      {
        codigo: 'ProcesosTecnológicos-01',
        nombre: 'Tratamiento primario.  Reducción de nutrientes y lodos.',
        descripcion: 'En esta primera fase incluye los procesos de Desengrasado y Desarenado de metales pesados. Inicia con la etapa de Ecualización, en donde se regula el caudal de entrada pasando de un flujo turbulento a flujo laminar (coeficiente reynolds). Posterior se produce la eliminar de residuos sólidos de gran tamaño por medio de rejas metálicas de gruesos y cucharas bivalva que realizan la remoción y conducción a la trituración de los sólidos arrasados y lodos primarios. Luego se conduce el fluido por medio de tamizados o rejas de finos o arenas mecánicas en lecho filtrante, a un contenedor donde se produce la Decantación lamelar primaria de los sólidos en suspensión, este volumen es conducido a la etapa de Adsorción, la cual protege a la planta de los choques tóxicos que puedan arrasar con el cultivo biológico. A continuación, se desarrolla una etapa inicial de Coagulación durante la cual un agitador rápido entra en contacto con el fluido generando un vortex que disuelve los coagulantes en el agua, se inicia entonces un proceso de Floculación, un agitador lento agiliza el crecimiento de los flóculos, que alcanzan una posterior Sedimentación desencadena en la formación de lodos secundarios, mismos que son recirculados por un sistema de fangos.',      
        estado: 1,
        categoriaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'ProcesosTecnológicos-02',
        nombre: 'Tratamiento secundario.  Reducción de micronutrientes y solidos en suspensión.',
        descripcion: 'A continuación, se desarrolla un procedimiento de Decantación secundaria, que se encarga de la eliminación de los sólidos en suspensión. Esta arranca en un proceso de Descomposición por bacterias biológicas o flora, permitiendo el control en los niveles de biosólidos, la reducción de la cantidad de micronutrientes disueltos (nitrógeno y fósforo), y de metales como cromo y amoniaco. Para ello se hace uso de la eliminación biológica de residuos en un reactor biológico que puede funcionar en forma tanto anaerobia como aerobia. Los procesos aerobios son más veloces comprenden tanques de aireación con columnas de aire que son llevadas en sentido ascendente para facilitar los procesos bioquímicos de crecimiento y degradación biológica. Esto se conoce como filtro de Fangos activados o Filtro biológico para eliminación de protozoos, bacterias, hongos, protozoos y algas, estos pueden ser complementados con un sistema de membrana sumergida y fibra hueca (MBR). Finalmente, durante la Clarificación se promueve la Sustratificación de la biomasa, la Sedimentación del biológico y su separación de los lodos terciarios por decantación.',      
        estado: 1,
        categoriaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'ProcesosTecnológicos-03',
        nombre: 'Tratamiento terciario. Desinfección.',
        descripcion: 'Es donde se realizan las etapas finales de Filtración por arena y antracita, membranas de microfiltración y ultrafiltración, y la desinfección por lámpara de luz ultravioleta, radiación electrónica, rayos gamma, sonido y calor. Estos mecanismos provocan daño de la pared celular de los microorganismos, alterando la permeabilidad de la pared celular o la naturaleza coloidal del protoplasma e inhibiendo su actividad enzimática. Entonces se logra la Estabilización del PH y un agua de los más altos estándares de calidad. Los desechos tóxicos que son removidos comprenden los cianuros, fenoles, sulfuros, detergentes no biodegradables, mercurio y plomo. Los procesos de cloración en etapas tempranas no son recomendados dado que pueden entrar en contacto con materia orgánica dando formación a trihalometanos. Para ellos se usa químicos como son el hipoclorito, dióxido de cloro y gas de cloro, que son adicionados durante la distribución, estos disponen de una acción residual que alcanza todos los extremos del sistema de tuberías. También se contrarresta la acides final con un producto alcalinizante.',      
        estado: 1,
        categoriaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('articulos', null, {});
  }
};
