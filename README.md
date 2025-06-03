# ISMT Cloud Website Deployment 🚀

This project includes a static website built for ISMT and deployed on Microsoft Azure using cloud-native components and Docker.

---

## 🌐 Website Features
- Static HTML/CSS/JS front-end (Login, Dashboard, etc.)
- Dockerized for container-based deployment
- Hosted via Azure Virtual Machine Scale Set with Load Balancer
- Network-secured using Azure NSGs

---

## 📁 File Structure

| File | Description |
|------|-------------|
| `index.html` | Home page |
| `login.html` | Login UI |
| `dashboard.html` | Dashboard after login |
| `login.js` | JS logic |
| `style.css` | Styling |
| `Dockerfile` | Docker config |
| Images & logos |

---

## ☁️ Azure Cloud Setup

- **VM Scale Set:** Auto-scaled hosting
- **Load Balancer:** Handles web traffic
- **Storage Account:** Static asset storage
- **NAT Gateway:** Internet access
- **Virtual Network & NSGs:** Secure, segmented networking
- **Resource Group:** Full project organized in `migrate_ismt_cloud`

---

## 🐳 Docker Build & Run

```bash
docker build -t ismt-website .
docker run -d -p 80:80 ismt-website
