# frontend page redesign challenge
### The challenge is to redesign the following webpage to look completely different from the original page while keeping functionality intact.

![image (1)](https://github.com/user-attachments/assets/ce5a180a-2b38-4ea0-bbb1-350c60ba4263)


## Setup Instructions

1. **Clone the repository:**
 
   ```bash
   git clone git@github.com:ismail-97/frontend-page-redesign-challenge.git

2. **Install Dependencies:**

   ```bash
   npm install

3. **Start the development server**

   ```bash
   npm run dev

4. **Open in browser**
   Navigate to: http://localhost:5173/select-skip


## Technolgies used
- React with TypeScript.
- Bootstrap and custom CSS for styling and responsiveness.

## Design Approach

- Initial idea is using slider to show all availble skips, but this is somehow NOT COMPLETELY DIFFERENT as required.
- Second idea is to show only one skip depending on user selection, but what if a user wants to compare between available skip options?
- The FINAL design decition is to combine both ideas: 
  1. The user select a prefered skip size.
  2. The selected skip is displayed with a comparison table with its closest skips.
