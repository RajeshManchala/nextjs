export const isMobile = (userAgent: NavigatorID['userAgent']) => (
    Boolean(/Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.exec(userAgent))
);
