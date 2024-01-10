import React from "react";
import ProfileImage from "./components/ProfileImage";
import NavBar from "./components/NavBar";
import Cell from "./components/Cell";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: undefined,
      name: undefined,
      gender: undefined,
      species: undefined,
      homeworld: undefined,
      imageURL: undefined,
      masters: undefined,
      apprentices: undefined,
      affiliations: undefined,
      status: undefined,
    };

    this.fetchCharacter = this.fetchCharacter.bind(this);
  }

  // fetches character on load
  componentDidMount = this.fetchCharacter;

  // fetched new random character from API
  fetchCharacter() {
    const randomId = Math.floor(Math.random() * 88);
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/id/${randomId}.json`;

    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        else alert(`${response.status} : API ERROR! Try again.`);
      })
      .then((data) => {
        this.setState({
          id: data.id,
          name: data.name,
          gender: data.gender,
          species: data.species,
          homeworld: data.homeworld,
          imageURL: data.image,
          masters: data.masters,
          apprentices: data.apprentices,
          affiliations:
            data.hasOwnProperty("affiliations") &&
            data.affiliations.length !== 0
              ? data.affiliations
              : "none",
          status: data.hasOwnProperty("died") ? "deceaced" : "active",
        });
      });
  }

  render() {
    const profile = this.state;

    // extract labels
    let label = {};
    Object.getOwnPropertyNames(profile).forEach((property) => {
      label[property] = property;
    });

    return (
      <div className="container-fluid p-0">
        {/* Navigation */}
        <header>
          <NavBar handleRefresh={this.fetchCharacter} />
          <hr className="m-0" />
        </header>

        <main className="container-fluid text-uppercase" key={profile.id}>
          <div className="row">
            {/* .col element */}
            <ProfileImage name={profile.name} imageURL={profile.imageURL} />

            <div className="col-lg-7">
              <div className="row px-3">
                {/* homeworld */}
                <Cell
                  className="col p-2 mt-3"
                  label={label.homeworld}
                  value={profile.homeworld}
                />
              </div>

              <hr />

              <div className="row px-3">
                {/* species */}
                <Cell
                  className="col p-2"
                  label={label.species}
                  value={profile.species}
                />

                {/* species */}
                <Cell
                  className="col p-2"
                  label={label.gender}
                  value={profile.gender}
                />

                {/* status */}
                <Cell
                  className="col p-2"
                  label={label.status}
                  value={profile.status}
                />
              </div>

              <hr />

              <div className="row px-3">
                {/* affiliations */}
                <Cell
                  className="col-* col-lg p-2"
                  label={label.affiliations}
                  value={profile.affiliations}
                />

                <hr className="d-block d-lg-none" />

                <div className="col">
                  <div className="row">
                    {/* masters */}
                    <Cell
                      className="col p-2"
                      label={label.masters}
                      value={profile.masters}
                    />
                  </div>

                  <hr />

                  <div className="row">
                    {/* apprentices */}
                    <Cell
                      className="col p-2"
                      label={label.apprentices}
                      value={profile.apprentices}
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr className="m-0" />
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
