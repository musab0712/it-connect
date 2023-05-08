import { useEffect } from "react";
import { BsWhatsapp } from 'react-icons/bs';

const WhatsAppButton = ({ phone, text }) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://cdn.jsdelivr.net/gh/brunomacedo/whatsapp-widget/whatsapp-widget.js";
        document.body.appendChild(script);
    }, []);

    return (
        <a href={`https://api.whatsapp.com/send?phone=${phone}&text=${text}`} className="whatsapp-button">
            <BsWhatsapp size={30} />
        </a>
    );
};

export default WhatsAppButton;
