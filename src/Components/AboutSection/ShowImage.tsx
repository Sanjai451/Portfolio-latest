import PROFILEIMAGELINK from '../../Details/ImageLink';
import TiltedCard from './TiltedCard';

const ShowImage = () => {
  return (
    <div>
        <TiltedCard
        imageSrc={PROFILEIMAGELINK}
        altText="Sanjai Kumar R"
        captionText="Sanjai Kumar R"
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        />
  
    </div>
  )
}

export default ShowImage
