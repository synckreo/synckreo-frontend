import echoLineTransitTunnel from '../images/project-card-images/echoline-transit-tunnel.webp';
import theRidgeviewResidence from '../images/project-card-images/the-ridgeview-residence.webp';
import shorelineConcreteRetreat from '../images/project-card-images/shoreline-concrete-retreat.webp';
import horizonPavilionHouse from '../images/project-card-images/horizon-pavilion-house.webp';
import theNorthlightHouse from '../images/project-card-images/the-northlight-house.webp';
import theTerraslopeResidence from '../images/project-card-images/the-terraslope-residence.webp';
import theGlassformStudioBuild from '../images/project-card-images/the-glassform-studio-build.webp';
import skylineTerraceDuplex from '../images/project-card-images/skyline-terrace-duplex.webp';
import danielBishop from '../images/avatar/daniel-bishop.jpg';

const professionalWorks = [
  {
    id: 1,
    title: 'The Ridgeview Residence',
    likes: 250,
    views: 432,
    thumbnail: theRidgeviewResidence,
    description: 'Construction site with excavation work',
  },
  {
    id: 2,
    title: 'Shoreline Concrete Retreat',
    likes: 250,
    views: 432,
    thumbnail: shorelineConcreteRetreat,
    description: 'Urban construction site with safety barriers',
  },
  {
    id: 3,
    title: 'EchoLine Transit Tunnel',
    likes: 250,
    views: 432,
    thumbnail: echoLineTransitTunnel,
    description: 'Tunnel construction project',
  },
  {
    id: 4,
    title: 'Horizon Pavilion House',
    likes: 250,
    views: 432,
    thumbnail: horizonPavilionHouse,
    description:
      'Modern residential architecture with angular design',
  },
  {
    id: 5,
    title: 'The Northlight House',
    likes: 250,
    views: 432,
    thumbnail: theNorthlightHouse,
    description: 'Contemporary house with natural surroundings',
  },
  {
    id: 6,
    title: 'The TerraSlope Residence',
    likes: 250,
    views: 432,
    thumbnail: theTerraslopeResidence,
    description: 'White modernist residential design',
  },
  {
    id: 7,
    title: 'The Glassform Studio Build',
    likes: 250,
    views: 432,
    thumbnail: theGlassformStudioBuild,
    description: 'Geometric glass and metal structure',
  },
  {
    id: 8,
    title: 'Skyline Terrace Duplex',
    likes: 250,
    views: 432,
    thumbnail: skylineTerraceDuplex,
    description: 'Upward architectural perspective',
  },
];

const professionalProfile = {
  name: 'Daniel Bishop',
  role: 'professional',
  avatar: danielBishop,
  title: 'Architect',
  location: {
    city: 'Los Angeles',
    state: 'California',
  },
  rating: 4.8,
  reviewCount: 48,
  stats: {
    followers: 10345,
    following: 1447,
    likes: 3204,
  },
  works: professionalWorks,
};

export { professionalWorks, professionalProfile };
