import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articulosMantenimiento: [],
  articulosAgregados: [],
  articulosFotos: [], // Array to hold articles with images
};

const revisionSlice = createSlice({
  name: 'revision',
  initialState,
  reducers: {
    setArticulosMantenimiento: (state, action) => {
      state.articulosMantenimiento = action.payload;
    },
    resetAllStates: (state) => {
      // Reset articulosAgregados and articulosFotos
      state.articulosAgregados = [];
      state.articulosFotos = [];

      // Recorre articulosMantenimiento y resetea el estado de cada artículo
      state.articulosMantenimiento = state.articulosMantenimiento.map(
        (categoria) => ({
          ...categoria,
          Articulos: categoria.Articulos.map((articulo) => ({
            ...articulo,
            ESTADO: '', // Resetea ESTADO de cada artículo
          })),
        }),
      );
    },

    activarArticulo: (state, action) => {
      const artCode = action.payload;

      state.articulosMantenimiento = state.articulosMantenimiento.map(
        (categoria) => ({
          ...categoria,
          Articulos: categoria.Articulos.map((articulo) =>
            articulo.ART_CODE === artCode
              ? { ...articulo, ESTADO: true }
              : articulo,
          ),
        }),
      );
    },
    desactivarArticulo: (state, action) => {
      const artCode = action.payload;

      state.articulosMantenimiento = state.articulosMantenimiento.map(
        (categoria) => ({
          ...categoria,
          Articulos: categoria.Articulos.map((articulo) =>
            articulo.ART_CODE === artCode
              ? { ...articulo, ESTADO: false }
              : articulo,
          ),
        }),
      );
    },
    agregarArticulo: (state, action) => {
      const { ART_NOMBRE, ESTADO } = action.payload;

      const nuevoArticulo = {
        ART_CODE: '',
        ART_CREATEDATE: '',
        ART_DESCRIPCION: ART_NOMBRE,
        ART_NOMBRE: ART_NOMBRE,
        ART_UPDATEDATE: '',
        ESTADO: ESTADO,
      };

      state.articulosAgregados.push(nuevoArticulo);
    },
    eliminarArticulo: (state, action) => {
      const ART_NOMBRE = action.payload;

      state.articulosAgregados = state.articulosAgregados.filter(
        (articulo) => articulo.ART_NOMBRE !== ART_NOMBRE,
      );
    },
    // Add an image to a specific article by ART_CODE
    addImage: (state, action) => {
      const { ART_CODE, image } = action.payload;

      // Find the article in articulosFotos
      const articulo = state.articulosFotos.find(
        (item) => item.ART_CODE === ART_CODE,
      );

      if (articulo) {
        articulo.imagenes.push(image); // Add image to the existing article
      } else {
        // If the article doesn't exist, create a new entry
        state.articulosFotos.push({
          ART_CODE,
          imagenes: [image],
        });
      }
    },

    removeImage: (state, action) => {
      const { ART_CODE, imageIndex } = action.payload;

      const articuloIndex = state.articulosFotos.findIndex(
        (item) => item.ART_CODE === ART_CODE,
      );

      if (articuloIndex !== -1) {
        const updatedImages = state.articulosFotos[
          articuloIndex
        ].imagenes.filter((_, index) => index !== imageIndex);

        if (updatedImages.length > 0) {
          state.articulosFotos[articuloIndex] = {
            ...state.articulosFotos[articuloIndex],
            imagenes: updatedImages,
          };
        } else {
          // Si ya no hay imágenes, eliminamos el objeto completo del array
          state.articulosFotos.splice(articuloIndex, 1);
        }
      }
    },

    // Update an image for a specific article by ART_CODE and image index
    updateImage: (state, action) => {
      const { ART_CODE, imageIndex, newImage } = action.payload;

      // Find the article in articulosFotos
      const articulo = state.articulosFotos.find(
        (item) => item.ART_CODE === ART_CODE,
      );

      if (articulo && articulo.imagenes[imageIndex]) {
        articulo.imagenes[imageIndex] = newImage; // Replace the image at the specified index
      }
    },

    // Set all images for a specific article by ART_CODE (replace all images)
    setImages: (state, action) => {
      const { ART_CODE, images } = action.payload;

      // Find the article in articulosFotos
      const articulo = state.articulosFotos.find(
        (item) => item.ART_CODE === ART_CODE,
      );

      if (articulo) {
        articulo.imagenes = images; // Set new images
      } else {
        // If the article doesn't exist, create a new entry
        state.articulosFotos.push({
          ART_CODE,
          imagenes: images,
        });
      }
    },
  },
});

export const {
  setArticulosMantenimiento,
  resetAllStates,
  activarArticulo,
  desactivarArticulo,
  agregarArticulo,
  eliminarArticulo,
  addImage,
  removeImage,
  updateImage,
  setImages,
} = revisionSlice.actions;

export default revisionSlice.reducer;
