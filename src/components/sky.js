const NightSky = () => {
	const stars = Array.from({ length: 5000 });

	return (
		<div className="nightSky">
			{stars.map((_, index) => (
				<div
					key={index}
					className="star"
					style={{
						top: `${Math.random() * 100}%`,
						left: `${Math.random() * 100}%`,
						transform: `scale(${Math.random() * 0.4})`,
					}}
				/>
			))}
		</div>
	);
};

export default NightSky;