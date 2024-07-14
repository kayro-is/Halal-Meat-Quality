import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <img src="logo.png" alt="A Votre Service" className="footer-logo" />
                    <p className="footer-address">
                        <strong>Halal Meat Quality</strong><br />
                        14 Rue Jules Saulnier, 93200 Saint-Denis<br />
                        00 33 1 49 22 09 70<br />
                        <a href="mailto:contact@avs.fr">contact@avs.fr</a><br />
                        Lundi - Jeudi / 09:00-12:00 13:00-17:00<br />
                        Vendredi 09:00-12:00
                    </p>
                    <div className="footer-social">
                        <a href="#"><img src="facebook-icon2.png" alt="Facebook" /></a>
                        <a href="#"><img src="X-icon.png" alt="X" /></a>
                        <a href="#"><img src="instagram-icon2.png" alt="Instagram" /></a>
                    </div>
                </div>
         {/*   <div className="footer-middle">
          <h3>Vos Commentaires</h3>
          <form className="footer-form">
            <input type="email" placeholder="Votre email" className="footer-input" />
            <textarea placeholder="Message" className="footer-textarea"></textarea>
            <button type="submit" className="footer-button">Envoyer</button>
          </form>
        </div>*/} 
                <div className="footer-right">
                    <h3>Siège</h3>
                    <div className="footer-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.971669434558!2d2.357925515658956!3d48.93324827929448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1c0dc4f9a9%3A0xd5e0e9e6901c3b19!2s14%20Rue%20Jules%20Saulnier%2C%2093200%20Saint-Denis%2C%20France!5e0!3m2!1sen!2sfr!4v1634820840903!5m2!1sen!2sfr" width="300" height="200" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2024 Tous droits réservés</p>
                <a href="#">Protection des données personnelles</a>
            </div>
        </footer>
    );
};

export default Footer;