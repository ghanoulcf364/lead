export const ModernForm = {
    name: 'modern_form',
    type: 'response',
    match: ({ trace }) =>
      trace.type === 'modern_form' || trace.payload.name === 'modern_form',
    render: ({ trace, element }) => {
      const container = document.createElement('div');
      container.classList.add('modern-form-container');
  
      container.innerHTML = `
        <style>
          body {
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          .modern-form-container {
            width: 100%;
            max-width: 320px;
            padding: 20px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            border: 1px solid #e0e0e0;
          }
          .modern-form-container:hover {
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            transform: translateY(-3px);
          }
          .modern-input {
            width: 100%;
            padding: 10px 12px;
            margin: 8px 0;
            border: 2px solid #e0e0e0;
            border-radius: 6px;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            background-color: #f9f9f9;
            color: #333;
          }
          .modern-input:focus {
            outline: none;
            border-color: #4C9A2A;
            box-shadow: 0 0 0 2px rgba(76, 154, 42, 0.1);
          }
          .modern-input::placeholder {
            color: #a0a0a0;
            font-size: 0.85rem;
          }
          .modern-button {
            width: 100%;
            padding: 10px;
            margin-top: 15px;
            background: #4C9A2A;
            color: white;
            font-size: 0.95rem;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
          }
          .modern-button:hover {
            background: #3a7d1e;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);
            transform: translateY(-1px);
          }
          .spinner {
            border: 3px solid rgba(76, 154, 42, 0.3);
            border-top: 3px solid #4C9A2A;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            animation: spin 1s linear infinite;
            margin: 15px auto;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        </style>
        <input type="text" class="modern-input" placeholder="الاسم الكامل" />
        <input type="email" class="modern-input" placeholder="البريد الإلكتروني" />
        <button class="modern-button" id="submit">تم</button>
        <div id="loading-spinner" class="spinner" style="display: none;"></div>
      `;
  
      const submitButton = container.querySelector('#submit');
      const loadingSpinner = container.querySelector('#loading-spinner');
      const nameInput = container.querySelector('input[type="text"]');
      const emailInput = container.querySelector('input[type="email"]');
  
      submitButton.addEventListener('click', () => {
        if (nameInput.value.trim() && emailInput.value.trim()) {
          window.voiceflow.chat.interact({
            type: 'complete',
            payload: { 
              name: nameInput.value,
              email: emailInput.value
            }
          });
  
          loadingSpinner.style.display = 'block';
  
          setTimeout(() => {
            loadingSpinner.style.display = 'none';
            container.innerHTML = '';
            nameInput.style.borderColor = '#e0e0e0';
            emailInput.style.borderColor = '#e0e0e0';
          }, 5000);
        } else {
          if (!nameInput.value.trim()) {
            nameInput.style.borderColor = 'red';
          }
          if (!emailInput.value.trim()) {
            emailInput.style.borderColor = 'red';
          }
        }
      });
  
      nameInput.addEventListener('input', () => {
        if (nameInput.value.trim()) {
          nameInput.style.borderColor = '#e0e0e0';
        }
      });
  
      emailInput.addEventListener('input', () => {
        if (emailInput.value.trim()) {
          emailInput.style.borderColor = '#e0e0e0';
        }
      });
  
      element.appendChild(container);
    },
  };
  