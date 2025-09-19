class SpecialHeader extends HTMLElement {
    ConnectedCallback(){
        this.innerHTML =``
    }
}


class SpecialFooter extends HTMLElement {
    ConnectedCallback(){
        this.innerHTML =
        `<style>.footer {
    display: grid;
    grid-template-columns: repeat(3,1fr);  
    padding: 40px 80px;
}
.footer-column {
    flex: 1;
    min-width: 200px;
    margin-bottom: 20px;
}
.footer-column h3 {
    font-size: 16px;
    color: #888888;
    margin-bottom: 50px;
}
.footer-column h4{
    color: #888888;
}
.footer-column p{
    font-size: 16px;
}
.footer-column a {
    display: block;
    color: #ffffff;
    text-decoration: none;
    margin-bottom: 20px;
    font-size: 18px;
}
.footer-column a:hover {
    text-decoration: underline;
}
.footer-bottom {
    padding: 20px 80px;
    font-size: 16px;
    color: #888888;
}
.bottom{
    text-align: center;
    margin-bottom: 5%;
}
.bottom a {
    color: #888888;
}</style>
        <div class="footer">
    <div class="footer-column">
        <h3>Explore</h3>
        <a href="#">About us</a>
        <a href="#">Careers</a>
        <a href="#">Press & Media</a>
        <a href="#">Contact us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Use of Cookies</a>
    </div>
    <div class="footer-column">
        <h3>Services</h3>
        <a href="#">Global Markets</a>
        <a href="#">Global Investments</a>
        <a href="#">Bank & Trust</a>
        <a href="#">Securities</a>
    </div>
    <div class="footer-column">
        <h3>Headquarter address</h3>
        <p>Britannia Financial Group<br>
        Level 28, 52 Lime Street<br>
        London, EC3M 7AF, United Kingdom</p>
        <h4>General enquiries</h4>
        <p>info@britannia.com</p>
    </div>
</div>
<div class="footer-bottom">
    <p>All site visitors should consult the legal notice for detailed local legal requirements applicable to your country and links to<br> specific entities of Britannia which are able to operate under those restrictions. Britannia Financial Group Limited is a<br> company registered in England and Wales (number 10417641) with it registered office at Level 28, 52 Lime Street, London,<br> EC3M 7AF, United Kingdom. The contents of this site are for general information purposes only. Nothing on this website<br> constitutes advice or a recommendation.</p>
    <p>© 2024 Britannia Financial Group Limited</p>
</div>
<div class="bottom">
    <p><a href="#">Back to top</a></p>
</div>
        `
    }
}

customElements.define('special-header',SpecialHeader)
customElements.define('special-footer',SpecialFooter)