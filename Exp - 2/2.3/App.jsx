import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardActions,
  TextField,
  Grid,
  Box,
  Paper,
  IconButton,
  Chip,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Switch,
  FormControlLabel,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Favorite,
  Share,
  Person,
  Email,
  Phone,
  Settings,
} from "@mui/icons-material";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    );
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: darkMode ? "#121212" : "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* AppBar / Navigation */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Material UI Demo
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                color="default"
              />
            }
            label="Dark Mode"
            sx={{ color: "white" }}
          />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Header Section */}
        <Paper
          elevation={3}
          sx={{ p: 3, mb: 4, bgcolor: darkMode ? "#1e1e1e" : "white" }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: darkMode ? "white" : "inherit" }}
          >
            Experiment-3: Material UI Components
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ color: darkMode ? "#aaa" : "inherit" }}
          >
            A showcase of Material UI components in React
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Chip label="React" color="primary" sx={{ mr: 1 }} />
            <Chip label="Material UI" color="secondary" sx={{ mr: 1 }} />
            <Chip label="Vite" variant="outlined" />
          </Box>
        </Paper>

        <Grid container spacing={3}>
          {/* Card Components */}
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: darkMode ? "#1e1e1e" : "white" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  sx={{ color: darkMode ? "white" : "inherit" }}
                >
                  Card Component
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: darkMode ? "#aaa" : "inherit" }}
                >
                  Material UI provides beautiful card components for displaying
                  content in a structured way.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" startIcon={<Favorite />}>
                  Like
                </Button>
                <Button size="small" startIcon={<Share />}>
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: darkMode ? "#1e1e1e" : "white" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  sx={{ color: darkMode ? "white" : "inherit" }}
                >
                  Buttons & Icons
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button variant="contained" sx={{ mr: 1, mb: 1 }}>
                    Contained
                  </Button>
                  <Button variant="outlined" sx={{ mr: 1, mb: 1 }}>
                    Outlined
                  </Button>
                  <Button variant="text" sx={{ mb: 1 }}>
                    Text
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: darkMode ? "#1e1e1e" : "white" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  sx={{ color: darkMode ? "white" : "inherit" }}
                >
                  User Profile
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
                    <Person />
                  </Avatar>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ color: darkMode ? "white" : "inherit" }}
                    >
                      John Doe
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ color: darkMode ? "#aaa" : "inherit" }}
                    >
                      john.doe@example.com
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{ p: 3, bgcolor: darkMode ? "#1e1e1e" : "white" }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: darkMode ? "white" : "inherit" }}
              >
                Contact Form
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: darkMode ? "#aaa" : "inherit",
                    },
                    "& .MuiOutlinedInput-root": {
                      color: darkMode ? "white" : "inherit",
                      "& fieldset": {
                        borderColor: darkMode ? "#555" : "inherit",
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: darkMode ? "#aaa" : "inherit",
                    },
                    "& .MuiOutlinedInput-root": {
                      color: darkMode ? "white" : "inherit",
                      "& fieldset": {
                        borderColor: darkMode ? "#555" : "inherit",
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  margin="normal"
                  multiline
                  rows={4}
                  required
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: darkMode ? "#aaa" : "inherit",
                    },
                    "& .MuiOutlinedInput-root": {
                      color: darkMode ? "white" : "inherit",
                      "& fieldset": {
                        borderColor: darkMode ? "#555" : "inherit",
                      },
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  fullWidth
                >
                  Submit
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Contact List */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{ p: 3, bgcolor: darkMode ? "#1e1e1e" : "white" }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: darkMode ? "white" : "inherit" }}
              >
                Contact List
              </Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "primary.main" }}>
                      <Email />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Email"
                    secondary="contact@example.com"
                    sx={{
                      "& .MuiListItemText-primary": {
                        color: darkMode ? "white" : "inherit",
                      },
                      "& .MuiListItemText-secondary": {
                        color: darkMode ? "#aaa" : "inherit",
                      },
                    }}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "secondary.main" }}>
                      <Phone />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Phone"
                    secondary="+1 234 567 8900"
                    sx={{
                      "& .MuiListItemText-primary": {
                        color: darkMode ? "white" : "inherit",
                      },
                      "& .MuiListItemText-secondary": {
                        color: darkMode ? "#aaa" : "inherit",
                      },
                    }}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "success.main" }}>
                      <Settings />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Support"
                    secondary="24/7 Available"
                    sx={{
                      "& .MuiListItemText-primary": {
                        color: darkMode ? "white" : "inherit",
                      },
                      "& .MuiListItemText-secondary": {
                        color: darkMode ? "#aaa" : "inherit",
                      },
                    }}
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>

        {/* Footer */}
        <Box sx={{ mt: 4, p: 2, textAlign: "center" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: darkMode ? "#aaa" : "inherit" }}
          >
            © 2026 Material UI Demo - Created with React & Material UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
