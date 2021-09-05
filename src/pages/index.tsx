import { useState } from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  const [plusOne, setPlusOne] = useState(true);

  return (
    <Main
      meta={
        <Meta
          title="Amaury Party Survey"
          description="a basic survey. fait rapidement..."
        />
      }
    >
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name" className="block">
            <span className="text-gray-700">Quel est ton nom?</span>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input mt-1 block w-full"
              placeholder="Antoine Daniel"
            />
          </label>
        </p>

        <p>
          <label htmlFor="night" className="block">
            <span className="text-gray-700">
              Souhaites-tu rester dormir sur place ?
            </span>
            <select
              id="night"
              name="night"
              className="form-select block w-full mt-1"
            >
              <option>Oui et j&apos;ai un duvet et une tente</option>
              <option>Oui et j&apos;ai un duvet</option>
              <option>Non</option>
            </select>
          </label>
        </p>

        <p>
          <label htmlFor="vegan" className="block">
            <span className="text-gray-700">
              Souhaites-tu compter dans les végétariens ?
            </span>
            <select
              id="vegan"
              name="vegan"
              className="form-select block w-full mt-1"
            >
              <option>Oui</option>
              <option>Non</option>
              <option>Osef</option>
            </select>
          </label>
        </p>

        <p>
          <label htmlFor="boat" className="block">
            <span className="text-gray-700">
              Souhaites-tu participer à la balade en canoë ?
            </span>
            <span className="text-gray-700 text-sm block">
              Cela va durer 2h30 et coûter ~24€ par personne.
            </span>
            <select
              id="boat"
              name="boat"
              className="form-select block w-full mt-1"
            >
              <option>Oui</option>
              <option>Non</option>
              <option>Je ne sais pas encore</option>
            </select>
          </label>
        </p>

        <p>
          <label htmlFor="plusOne" className="block">
            <span className="text-gray-700">Souhaites-tu convier un +1 ?</span>
            <select
              id="plusOne"
              name="plusOne"
              className="form-select block w-full mt-1"
              onChange={(e) => {
                setPlusOne(e.target.value === 'Oui');
              }}
            >
              <option>Oui</option>
              <option>Non</option>
            </select>
          </label>
        </p>

        {plusOne && (
          <>
            <p>
              <label htmlFor="namePlusOne" className="block">
                <span className="text-gray-700">Quel est son nom?</span>
                <input
                  type="text"
                  id="namePlusOne"
                  name="namePlusOne"
                  className="form-input mt-1 block w-full"
                  placeholder="Antoine Daniel"
                />
              </label>
            </p>

            <p>
              <label htmlFor="nightPlusOne" className="block">
                <span className="text-gray-700">
                  Est-ce que le +1 souhaite rester dormir sur place ?
                </span>
                <select
                  id="nightPlusOne"
                  name="nightPlusOne"
                  className="form-select block w-full mt-1"
                >
                  <option>Oui et le +1 a un duvet et une tente</option>
                  <option>Oui et le +1 a un duvet</option>
                  <option>Non</option>
                </select>
              </label>
            </p>

            <p>
              <label htmlFor="veganPlusOne" className="block">
                <span className="text-gray-700">
                  Est-ce que le +1 souhaite compter dans les végétariens ?
                </span>
                <select
                  id="veganPlusOne"
                  name="veganPlusOne"
                  className="form-select block w-full mt-1"
                >
                  <option>Oui</option>
                  <option>Non</option>
                  <option>Osef</option>
                </select>
              </label>
            </p>

            <p>
              <label htmlFor="boatPlusOne" className="block">
                <span className="text-gray-700">
                  Est-ce que le +1 souhaite participer à la balade en canoë ?
                </span>
                <span className="text-gray-700 text-sm block">
                  Cela va durer 2h30 et coûter ~24€ par personne.
                </span>
                <select
                  id="boatPlusOne"
                  name="boatPlusOne"
                  className="form-select block w-full mt-1"
                >
                  <option>Oui</option>
                  <option>Non</option>
                  <option>Le +1 ne sait pas encore</option>
                </select>
              </label>
            </p>
          </>
        )}

        <p>
          <button
            type="submit"
            className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
          >
            Valider
          </button>
        </p>
      </form>
    </Main>
  );
};

export default Index;
