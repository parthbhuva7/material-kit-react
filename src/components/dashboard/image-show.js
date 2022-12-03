import { Box, Card, CardContent} from '@mui/material';
import { CarouselImages } from '../carousel/carousel-images';
import { portfolioImages } from 'src/__mocks__/images';

const style = {
  flexGrow: 1
};

export const ImageShow = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent sx={{ p:0, '&:last-child': { pb: 0 }}}>
      <Box sx={style}>
        <CarouselImages images={portfolioImages} autoplay={true} />
      </Box>
    </CardContent>
  </Card>
);
