import React, { useState } from 'react';

const Formulario = () => {

  const [busqueda, guardarBusqueda] = useState({
    artista: '',
    cancion: ''
  });
  const [error, guardarError] = useState(false);

  const { artista, cancion } = busqueda;

  // función a cada input para leer su contenido
  const actualizarState = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  // consultar las apis
  const buscarInformacion = e => {
    e.preventDefault();

    if (artista.trim() === '' || cancion.trim() === '') {
      guardarError(true);
      return;
    }
    guardarError(false);
    // Todo bien, pasar al componente principal

  }


  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            onSubmit={buscarInformacion}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">Search Lyrics and Songs</legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artist</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Artist Name"
                      onChange={actualizarState}
                      value={artista}
                    />
                  </div>

                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Song</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Song Name"
                      onChange={actualizarState}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary float-right"
              >Search</button>
            </fieldset>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario; 