const Footer = () => {
  return (
    <div className="footer bg-white shadow mt-20" id="social">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="py-4">&copy; Dibuat oleh <span className="font-bold">Taufiq Arinta Ardiyono</span></p>
        <div className="social-footer flex items-center sm:gap-5 gap-2">
        <a href="https://www.linkedin.com/in/taufiq-arinta" target="_blank" rel="noopener noreferrer">
          <i className="ri-linkedin-box-fill text-2xl"></i>
        </a>
        <a href="https://www.instagram.com/taufiq_arinta" target="_blank" rel="noopener noreferrer">
          <i className="ri-instagram-fill text-2xl"></i>
        </a>
        <a href="https://github.com/taufiqarinta" target="_blank" rel="noopener noreferrer">
          <i className="ri-github-fill text-2xl"></i>
        </a>
        <a href="https://wa.me/6282131495585" target="_blank" rel="noopener noreferrer">
          <i className="ri-whatsapp-line text-2xl"></i>
        </a>

        </div>
      </div>
    </div>
  )
}

export default Footer