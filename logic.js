// Chạy trên githubpage nên t sẽ dùng phương thức localStorage để lưu tài khoản nhen
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

// Đây là phần logic đăng ký nè
if (document.getElementById('signupForm')) {
    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const user = {
            firstName: document.getElementById('firstName').value, //ní chú ý các tên biến, nhớ phải đặt tên biến dễ nhớ
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            birthday: document.getElementById('birthday').value
        };

        // Này là if bt, nó dùng để để đảm bảo nhập tất cả thông tin đủ
        if (!user.firstName || !user.lastName || !user.email || !user.password || !user.birthday) {
            alert('Vui lòng nhập đầy đủ thông tin!');
            return;
        }

        let users = JSON.parse(localStorage.getItem('users'));
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        
        alert('Đăng ký thành công!');
        window.location.href = 'login.html';
    });
}

// Này để xử lý đăng nhập
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        const users = JSON.parse(localStorage.getItem('users'));
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = 'profile.html';
        } else {
            alert('Email hoặc mật khẩu không đúng!');
        }
    });
}