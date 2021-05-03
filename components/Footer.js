import FooterContent from "./FooterContent";
// import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className="cardHolder">
      <FooterContent title="Contact">
        Contact information here
      </FooterContent>
      <FooterContent title="About Us">
        <p>The Angel of Edgewood provides quality, hearty meals or full food boxes for all. What does “ALL” look like? They are the elderly, disabled, veterans, unemployed, poor, migrants, and homeless women, men, and children.</p>
      </FooterContent>
      <FooterContent title="Connect with Us">
        {/* <SocialIcons /> */}
      </FooterContent>
      <FooterContent title="Reach out">
        If you or someone you know is in need of help, please click the link below and fill out the form.
        <button>Reach Out</button>
      </FooterContent>
    </footer>
  )
}