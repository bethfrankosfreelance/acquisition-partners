const OrganicBlush = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {/* Top-right flowing shape */}
    <svg
      className="absolute -top-[10%] -right-[15%] w-[70%] h-[80%] opacity-[0.07]"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M450 50C520 120 580 220 550 330C520 440 430 500 340 530C250 560 150 540 90 480C30 420 10 320 40 230C70 140 150 60 250 30C350 0 380 -20 450 50Z"
        fill="hsl(20, 40%, 80%)"
      />
    </svg>

    {/* Bottom-left flowing shape */}
    <svg
      className="absolute -bottom-[15%] -left-[10%] w-[55%] h-[70%] opacity-[0.05]"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M380 80C440 150 470 260 430 350C390 440 290 480 200 470C110 460 40 400 20 320C0 240 30 140 100 80C170 20 280 0 380 80Z"
        fill="hsl(30, 35%, 78%)"
      />
    </svg>

    {/* Mid accent ring */}
    <svg
      className="absolute top-[20%] left-[5%] w-[40%] h-[50%] opacity-[0.04]"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="200" cy="200" r="180" stroke="hsl(25, 35%, 75%)" strokeWidth="1.5" fill="none" />
      <circle cx="200" cy="200" r="140" stroke="hsl(25, 35%, 75%)" strokeWidth="0.8" fill="none" />
    </svg>
  </div>
);

export default OrganicBlush;
