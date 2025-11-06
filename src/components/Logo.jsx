function Logo({ size = 36, imageSrc }) {
	if (imageSrc) {
		return <img className="logo-mark" src={imageSrc} width={size} height={size} alt="HandiCraft" style={{ borderRadius: "50%", objectFit: "cover" }} />;
	}
	return (
		<svg
			className="logo-mark"
			width={size}
			height={size}
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-label="HandiCraft"
		>
            <circle cx="24" cy="24" r="22" fill="#FFF3E0" stroke="#C97E48" strokeWidth="2" />
            <path d="M24 8c6 6 6 12 0 18c-6 6-6 12 0 18" stroke="#C97E48" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 28c4-2 8-2 12 0c4 2 8 2 12 0" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
            <path d="M18 14c1.8 1.2 3.2 2.8 4 4.5M30 14c-1.8 1.2-3.2 2.8-4 4.5" stroke="#C97E48" strokeWidth="2" strokeLinecap="round"/>
            <path d="M10 20c2 0 4-2 6-4M38 20c-2 0-4-2-6-4" stroke="#C97E48" strokeWidth="2" strokeLinecap="round"/>
		</svg>
	);
}

export default Logo;


