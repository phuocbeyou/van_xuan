import { memo } from 'react';
import './Logo.css';

const Logo = memo(({ showText = true }: { showText?: boolean }) => (
  <div className="logo-container">
    <img src="/images/logo_du_an.png" alt="Vạn Xuân Heritage" className="logo-main" />
    {showText && <span className="logo-divider"></span>}
    {showText && <img src="/images/logo_369_group.png" alt="369 Group" className="logo-sub" />}
  </div>
));

export default Logo;
