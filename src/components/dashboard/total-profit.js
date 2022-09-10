import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import DevicesFoldIcon from '@mui/icons-material/DevicesFold'

export const TotalProfit = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            FABRIC
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            1M
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <DevicesFoldIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* <ArrowDownwardIcon color="error" />
        <Typography
          color="error"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          12%
        </Typography> */}
        <Typography
          color="textSecondary"
          variant="caption"
        >
          meter/year
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
