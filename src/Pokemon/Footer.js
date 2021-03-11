import React from 'react';
import Pokemon from '../assets/pokemon.png';
import {ICONS} from '../Services/constants';
import Icon from '../Services/Icon.jsx';

export const Footer = () => (
  <div className="footer">
      <div className="footer-box">
          <div className="footer-content">
              <div className="tutorial">
                  <div className="catch">
                    <h2>Simple Tutorial Capture</h2>
                    <p><Icon icon={ICONS.CLOUD_CHECK} />&nbsp;Click name on pokemon list</p>
                    <p><Icon icon={ICONS.CLOUD_CHECK} />&nbsp;Try to catch pokemon with button "Capture" on bottom left of detail pokemon page</p>
                    <p><Icon icon={ICONS.CLOUD_CHECK} />&nbsp;If you catch one then give nickname for your pokemon</p>
                    <p><Icon icon={ICONS.CLOUD_CHECK} />&nbsp;Click button "Add" to store pokemon on my pokemon list</p>
                  </div>
                  <div className="footer-img">
                    <img alt="pokemon" src={Pokemon} />
                  </div>
                  <div className="release">
                    <h2>Simple Tutorial Release</h2>
                    <p><Icon icon={ICONS.CLOUD_CHECK} />&nbsp;Click name on my pokemon list</p>
                    <p><Icon icon={ICONS.CLOUD_CHECK} />&nbsp;Try to release pokemon by click on button "Release" on bottom left of detail pokemon page</p>
                    <p><Icon icon={ICONS.CLOUD_CHECK} />&nbsp;If you release one then your pokemon has gone from my pokemon list</p>
                  </div>
              </div>
              <div className="copy-right">
                <p>Copyright &copy; 2021, All Right Reserved RIZKI RAHMAN HAKIM PASARIBU</p>
              </div>
          </div>
      </div>
  </div>
);

export default Footer;