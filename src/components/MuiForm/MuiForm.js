import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const MuiForm = () => {
  return (
    <form>
      <TextField label="E-mail" variant="standard" />
      <Typography variant="subtitle1" sx={{ marginTop: "16px" }}>
        Your message
      </Typography>
      <TextField label="Message" multiline rows={4} />
      <div>
        <Button variant="contained" color="success" sx={{ marginTop: "32px" }}>
          Send
        </Button>
      </div>
    </form>
  );
};
