import { Box, Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';

export const CorporateProfile = (props) => {
  
  return (
    <Card {...props}>
      <CardHeader
        title="Corporate Profile"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            // height: 400,
            position: 'relative'
          }}
        >
          <Grid container>
            <Grid 
              item
              lg={3}
              md={12}
              xl={3}
              xs={12}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  height: '180px'
                }}
              >
                <img
                  alt="Product"
                  src="/static/images/kalpataru/logo.png"
                />
              </Box>
            </Grid>
            <Grid
              item
              lg={9}
              md={12}
              xl={9}
              xs={12}
            >
              <Typography
                color="inherit"
                variant="body1"
              >
                Leading the premium cotton fabrics and the high street fashion printed fabrics, Kalpataru Corporation is the global rulers of the industry.
                <br/>
                <br/>
                <p>We at Kalpataru boast a high profile list of clientele that includes domestic and international brands across 44 countries. This list includes brands like Uniqlo, Zara, Esprit, Next, Paul Smith, M&S, H&M, ANF, Belk, Moss Brothers to name a few. Some of the farfetched domestic client brands include names like Louis Philippe, Van Huesen, Blackberry and Zodiac.</p>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};
