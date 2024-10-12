import { Typography, useTheme } from "@mui/material";
import PixIcon from "@mui/icons-material/Pix";
import FlexBetween from "@/components/FlexBetween";

const Navbar = () => {
  const { palette } = useTheme();
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* Левая сторона */}
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          Finanseer
        </Typography>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
