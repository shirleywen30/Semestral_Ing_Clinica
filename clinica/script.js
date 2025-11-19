// ===== BASE DE DATOS EN MEMORIA =====
let store = {
    users: [
        {
            id: 'U001',
            name: 'Admin',
            lastname: 'Sistema',
            email: 'admin@clinica.com',
            cedula: '1-000-1',
            phone: '1234567',
            password: 'admin123',
            roleId: 'R001',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        // Secretarios
        {
            id: 'U002',
            name: 'María',
            lastname: 'González',
            email: 'user1@clinica.com',
            cedula: '2-000-1',
            phone: '2234567',
            password: 'user123',
            roleId: 'R002',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'U003',
            name: 'Carlos',
            lastname: 'López',
            email: 'secretario2@clinica.com',
            cedula: '2-000-2',
            phone: '3234567',
            password: 'secret123',
            roleId: 'R002',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        // Médicos
        {
            id: 'U004',
            name: 'Ana',
            lastname: 'Rodríguez',
            email: 'user2@clinica.com',
            cedula: '3-000-1',
            phone: '4234567',
            password: 'user123',
            roleId: 'R003',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'U005',
            name: 'Juan',
            lastname: 'Pérez',
            email: 'user3@clinica.com',
            cedula: '3-000-2',
            phone: '5234567',
            password: 'user123',
            roleId: 'R003',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'U006',
            name: 'Laura',
            lastname: 'Martínez',
            email: 'medico3@clinica.com',
            cedula: '3-000-3',
            phone: '6234567',
            password: 'medico123',
            roleId: 'R003',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'U007',
            name: 'Roberto',
            lastname: 'Hernández',
            email: 'medico4@clinica.com',
            cedula: '3-000-4',
            phone: '7234567',
            password: 'medico123',
            roleId: 'R003',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'U008',
            name: 'Sofia',
            lastname: 'Díaz',
            email: 'medico5@clinica.com',
            cedula: '3-000-5',
            phone: '8234567',
            password: 'medico123',
            roleId: 'R003',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        }
    ],
    roles: [
        { id: 'R001', name: 'Administrador', code: 'admin' },
        { id: 'R002', name: 'Secretario', code: 'secretary' },
        { id: 'R003', name: 'Médico', code: 'doctor' }
    ],
    patients: [
        {
            id: 'P001',
            name: 'Pedro',
            lastname: 'García',
            cedula: '4-000-1',
            email: 'pedro.garcia@email.com',
            phone: '9234567',
            birthDate: '1985-05-15',
            gender: 'M',
            address: 'Calle 123, Ciudad',
            emergencyContact: 'María García - 9876543',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'P002',
            name: 'Elena',
            lastname: 'Morales',
            cedula: '4-000-2',
            email: 'elena.morales@email.com',
            phone: '9334567',
            birthDate: '1990-08-22',
            gender: 'F',
            address: 'Avenida 456, Ciudad',
            emergencyContact: 'Carlos Morales - 9876544',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'P003',
            name: 'Miguel',
            lastname: 'Castillo',
            cedula: '4-000-3',
            email: 'miguel.castillo@email.com',
            phone: '9434567',
            birthDate: '1978-12-10',
            gender: 'M',
            address: 'Carrera 789, Ciudad',
            emergencyContact: 'Luisa Castillo - 9876545',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'P004',
            name: 'Carmen',
            lastname: 'Vargas',
            cedula: '4-000-4',
            email: 'carmen.vargas@email.com',
            phone: '9534567',
            birthDate: '1982-03-30',
            gender: 'F',
            address: 'Diagonal 101, Ciudad',
            emergencyContact: 'Jorge Vargas - 9876546',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'P005',
            name: 'Ricardo',
            lastname: 'Silva',
            cedula: '4-000-5',
            email: 'ricardo.silva@email.com',
            phone: '9634567',
            birthDate: '1995-07-18',
            gender: 'M',
            address: 'Transversal 202, Ciudad',
            emergencyContact: 'Ana Silva - 9876547',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'P006',
            name: 'Isabel',
            lastname: 'Rojas',
            cedula: '4-000-6',
            email: 'isabel.rojas@email.com',
            phone: '9734567',
            birthDate: '1988-11-05',
            gender: 'F',
            address: 'Calle 303, Ciudad',
            emergencyContact: 'Pedro Rojas - 9876548',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'P007',
            name: 'Fernando',
            lastname: 'Mendoza',
            cedula: '4-000-7',
            email: 'fernando.mendoza@email.com',
            phone: '9834567',
            birthDate: '1975-09-25',
            gender: 'M',
            address: 'Avenida 404, Ciudad',
            emergencyContact: 'Laura Mendoza - 9876549',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'P008',
            name: 'Gabriela',
            lastname: 'Cruz',
            cedula: '4-000-8',
            email: 'gabriela.cruz@email.com',
            phone: '9934567',
            birthDate: '1992-04-12',
            gender: 'F',
            address: 'Carrera 505, Ciudad',
            emergencyContact: 'Roberto Cruz - 9876550',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'P009',
            name: 'Oscar',
            lastname: 'Ramírez',
            cedula: '4-000-9',
            email: 'oscar.ramirez@email.com',
            phone: '9044567',
            birthDate: '1980-01-20',
            gender: 'M',
            address: 'Diagonal 606, Ciudad',
            emergencyContact: 'Sofia Ramírez - 9876551',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'P010',
            name: 'Patricia',
            lastname: 'Ortiz',
            cedula: '4-001-0',
            email: 'patricia.ortiz@email.com',
            phone: '9144567',
            birthDate: '1987-06-08',
            gender: 'F',
            address: 'Transversal 707, Ciudad',
            emergencyContact: 'Miguel Ortiz - 9876552',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'P011',
            name: 'Luis',
            lastname: 'Navarro',
            cedula: '4-001-1',
            email: 'luis.navarro@email.com',
            phone: '9244567',
            birthDate: '1993-02-14',
            gender: 'M',
            address: 'Calle 808, Ciudad',
            emergencyContact: 'Carmen Navarro - 9876553',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'P012',
            name: 'Diana',
            lastname: 'Fuentes',
            cedula: '4-001-2',
            email: 'diana.fuentes@email.com',
            phone: '9344567',
            birthDate: '1984-10-03',
            gender: 'F',
            address: 'Avenida 909, Ciudad',
            emergencyContact: 'Ricardo Fuentes - 9876554',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'P013',
            name: 'Javier',
            lastname: 'Reyes',
            cedula: '4-001-3',
            email: 'javier.reyes@email.com',
            phone: '9444567',
            birthDate: '1979-12-28',
            gender: 'M',
            address: 'Carrera 1010, Ciudad',
            emergencyContact: 'Isabel Reyes - 9876555',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'P014',
            name: 'Teresa',
            lastname: 'Acosta',
            cedula: '4-001-4',
            email: 'teresa.acosta@email.com',
            phone: '9544567',
            birthDate: '1991-07-17',
            gender: 'F',
            address: 'Diagonal 1111, Ciudad',
            emergencyContact: 'Fernando Acosta - 9876556',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'P015',
            name: 'Héctor',
            lastname: 'Medina',
            cedula: '4-001-5',
            email: 'hector.medina@email.com',
            phone: '9644567',
            birthDate: '1986-04-09',
            gender: 'M',
            address: 'Transversal 1212, Ciudad',
            emergencyContact: 'Gabriela Medina - 9876557',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'P016',
            name: 'Rosa',
            lastname: 'Guerrero',
            cedula: '4-001-6',
            email: 'rosa.guerrero@email.com',
            phone: '9744567',
            birthDate: '1983-09-21',
            gender: 'F',
            address: 'Calle 1313, Ciudad',
            emergencyContact: 'Oscar Guerrero - 9876558',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'P017',
            name: 'Alberto',
            lastname: 'Ríos',
            cedula: '4-001-7',
            email: 'alberto.rios@email.com',
            phone: '9844567',
            birthDate: '1977-11-30',
            gender: 'M',
            address: 'Avenida 1414, Ciudad',
            emergencyContact: 'Patricia Ríos - 9876559',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'P018',
            name: 'Verónica',
            lastname: 'Castro',
            cedula: '4-001-8',
            email: 'veronica.castro@email.com',
            phone: '9944567',
            birthDate: '1994-05-06',
            gender: 'F',
            address: 'Carrera 1515, Ciudad',
            emergencyContact: 'Luis Castro - 9876560',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'P019',
            name: 'Raúl',
            lastname: 'Romero',
            cedula: '4-001-9',
            email: 'raul.romero@email.com',
            phone: '9055567',
            birthDate: '1989-08-14',
            gender: 'M',
            address: 'Diagonal 1616, Ciudad',
            emergencyContact: 'Diana Romero - 9876561',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        },
        {
            id: 'P020',
            name: 'Natalia',
            lastname: 'Suárez',
            cedula: '4-002-0',
            email: 'natalia.suarez@email.com',
            phone: '9155567',
            birthDate: '1996-03-02',
            gender: 'F',
            address: 'Transversal 1717, Ciudad',
            emergencyContact: 'Javier Suárez - 9876562',
            registryDate: new Date().toISOString().split('T')[0],
            active: true
        }
    ],
    appointments: [],
    medicalCare: [],
    medicalHistory: [],
    doctors: [
        {
            id: 'D001',
            userId: 'U004',
            specialty: 'Cardiología',
            schedule: '8:00 AM - 4:00 PM',
            consultPhone: '4234567'
        },
        {
            id: 'D002',
            userId: 'U005',
            specialty: 'Pediatría',
            schedule: '9:00 AM - 5:00 PM',
            consultPhone: '5234567'
        },
        {
            id: 'D003',
            userId: 'U006',
            specialty: 'Dermatología',
            schedule: '8:30 AM - 4:30 PM',
            consultPhone: '6234567'
        },
        {
            id: 'D004',
            userId: 'U007',
            specialty: 'Ortopedia',
            schedule: '7:00 AM - 3:00 PM',
            consultPhone: '7234567'
        },
        {
            id: 'D005',
            userId: 'U008',
            specialty: 'Ginecología',
            schedule: '10:00 AM - 6:00 PM',
            consultPhone: '8234567'
        }
    ],
    loginAttempts: {},
    notifications: []
};

// ===== VARIABLES GLOBALES =====
let currentUser = null;
let selectedUserId = null;
let selectedPatientId = null;
let selectedAppointmentId = null;

// ===== GENERADOR DE IDs =====
function generateId(prefix) {
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `${prefix}${random}`;
}

// ===== LOGIN LOGIC =====
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const lockKey = username;
    if (!store.loginAttempts[lockKey]) {
        store.loginAttempts[lockKey] = 0;
    }

    const alertDiv = document.getElementById('alertLogin');
    alertDiv.className = 'alert';
    alertDiv.style.display = 'none';

    if (store.loginAttempts[lockKey] >= 3) {
        alertDiv.className = 'alert alert-danger';
        alertDiv.textContent = 'Cuenta bloqueada temporalmente por múltiples intentos fallidos.';
        alertDiv.style.display = 'block';
        return;
    }

    const user = store.users.find(u => (u.email === username || u.email === username) && u.password === password && u.active);

    if (user) {
        store.loginAttempts[lockKey] = 0;
        const roleObj = store.roles.find(r => r.id === user.roleId);
        currentUser = { ...user, role: roleObj.code };
        showDashboard();
    } else {
        store.loginAttempts[lockKey]++;
        const remaining = 3 - store.loginAttempts[lockKey];
        if (remaining > 0) {
            alertDiv.className = 'alert alert-warning';
            alertDiv.textContent = `Credenciales inválidas. Intentos restantes: ${remaining}`;
        } else {
            alertDiv.className = 'alert alert-danger';
            alertDiv.textContent = 'Cuenta bloqueada temporalmente por múltiples intentos fallidos.';
            setTimeout(() => {
                store.loginAttempts[lockKey] = 0;
            }, 900000);
        }
        alertDiv.style.display = 'block';
    }
});

function showDashboard() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('userName').textContent = `${currentUser.name} ${currentUser.lastname}`;
    
    // Mostrar roles
    let roleText = '';
    if (currentUser.role === 'admin') {
        roleText = 'Administrador';
    } else if (currentUser.role === 'secretary') {
        roleText = 'Secretario';
    } else if (currentUser.role === 'doctor') {
        roleText = 'Médico';
    }
    document.getElementById('userRole').textContent = roleText;

    if (currentUser.role === 'admin') {
        document.getElementById('adminDashboard').classList.add('active');
        loadUsersList();
        populateDoctorSelects();
    } else if (currentUser.role === 'secretary') {
        document.getElementById('secretaryDashboard').classList.add('active');
        loadPatientsList();
        populateAppointmentSelects();
    } else if (currentUser.role === 'doctor') {
        document.getElementById('doctorDashboard').classList.add('active');
        loadDoctorPatients();
        populateDoctorAppointmentSelects();
    }
}

function logout() {
    currentUser = null;
    document.getElementById('loginContainer').style.display = 'flex';
    document.getElementById('dashboard').style.display = 'none';
    
    document.getElementById('loginForm').reset();
    document.getElementById('alertLogin').style.display = 'none';
    
    document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
}

// ===== FUNCIONES ADMINISTRADOR =====
function showAdminSection(section) {
    document.querySelectorAll('#adminDashboard .section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('#adminDashboard .btn-menu').forEach(el => el.classList.remove('active'));
    
    const sectionMap = {
        'users': { element: 'adminUsers', button: 0 },
        'registerUser': { element: 'adminRegisterUser', button: 1 },
        'statistics': { element: 'adminStatistics', button: 2 }
    };

    if (sectionMap[section]) {
        document.getElementById(sectionMap[section].element).classList.add('active');
        document.querySelectorAll('#adminDashboard .btn-menu')[sectionMap[section].button].classList.add('active');
    }

    if (section === 'users') {
        loadUsersList();
    } else if (section === 'statistics') {
        loadStatistics();
    }
}

function loadUsersList() {
    const usersList = document.getElementById('usersList');
    
    if (store.users.length === 0) {
        usersList.innerHTML = '<div class="no-data">No hay usuarios registrados</div>';
        return;
    }

    let html = '<table><thead><tr><th>ID</th><th>Nombre</th><th>Email</th><th>Rol</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>';
    
    store.users.forEach(user => {
        const role = store.roles.find(r => r.id === user.roleId);
        const roleBadge = role.code === 'admin' ? 'badge-admin' : role.code === 'secretary' ? 'badge-secretary' : 'badge-doctor';
        const stateBadge = user.active ? 'badge-active' : 'badge-inactive';
        
        html += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name} ${user.lastname}</td>
                <td>${user.email}</td>
                <td><span class="badge ${roleBadge}">${role.name}</span></td>
                <td><span class="badge ${stateBadge}">${user.active ? 'Activo' : 'Inactivo'}</span></td>
                <td>
                    <button class="btn-action btn-view" onclick="viewUserDetail('${user.id}')">Ver</button>
                    <button class="btn-action btn-edit" onclick="loadEditUserForm('${user.id}')">Editar</button>
                    <button class="btn-action btn-delete" onclick="toggleUserStatus('${user.id}')">${user.active ? 'Inactivar' : 'Activar'}</button>
                </td>
            </tr>
        `;
    });
    
    html += '</tbody></table>';
    usersList.innerHTML = html;
}

function viewUserDetail(userId) {
    selectedUserId = userId;
    const user = store.users.find(u => u.id === userId);
    const role = store.roles.find(r => r.id === user.roleId);
    const doctor = store.doctors.find(d => d.userId === userId);

    let html = `
        <div class="info-grid">
            <div class="info-item">
                <label>ID Usuario</label>
                <p>${user.id}</p>
            </div>
            <div class="info-item">
                <label>Nombre</label>
                <p>${user.name}</p>
            </div>
            <div class="info-item">
                <label>Apellido</label>
                <p>${user.lastname}</p>
            </div>
            <div class="info-item">
                <label>Email</label>
                <p>${user.email}</p>
            </div>
            <div class="info-item">
                <label>Cédula</label>
                <p>${user.cedula}</p>
            </div>
            <div class="info-item">
                <label>Teléfono</label>
                <p>${user.phone}</p>
            </div>
            <div class="info-item">
                <label>Contraseña</label>
                <p>${user.password}</p>
            </div>
            <div class="info-item">
                <label>Rol</label>
                <p>${role.name}</p>
            </div>
            <div class="info-item">
                <label>Fecha de Registro</label>
                <p>${user.registryDate}</p>
            </div>
            <div class="info-item">
                <label>Estado</label>
                <p><span class="badge ${user.active ? 'badge-active' : 'badge-inactive'}">${user.active ? 'Activo' : 'Inactivo'}</span></p>
            </div>
    `;

    if (doctor) {
        html += `
            <div class="info-item">
                <label>ID Médico</label>
                <p>${doctor.id}</p>
            </div>
            <div class="info-item">
                <label>Especialidad</label>
                <p>${doctor.specialty}</p>
            </div>
            <div class="info-item">
                <label>Horario de Atención</label>
                <p>${doctor.schedule}</p>
            </div>
            <div class="info-item">
                <label>Teléfono Consulta</label>
                <p>${doctor.consultPhone}</p>
            </div>
        `;
    }

    html += '</div>';

    document.getElementById('userDetailContent').innerHTML = html;
    document.getElementById('adminUserDetail').classList.add('active');
    document.getElementById('adminUsers').classList.remove('active');
}

function loadEditUserForm(userId) {
    selectedUserId = userId;
    const user = store.users.find(u => u.id === userId);
    const doctor = store.doctors.find(d => d.userId === userId);

    document.getElementById('editUserName').value = user.name;
    document.getElementById('editUserLastname').value = user.lastname;
    document.getElementById('editUserEmail').value = user.email;
    document.getElementById('editUserCedula').value = user.cedula;
    document.getElementById('editUserPhone').value = user.phone;
    document.getElementById('editUserPassword').value = user.password;

    if (doctor) {
        document.getElementById('editDoctorFields').style.display = 'block';
        document.getElementById('editDoctorSpecialty').value = doctor.specialty;
        document.getElementById('editDoctorSchedule').value = doctor.schedule;
        document.getElementById('editDoctorConsultPhone').value = doctor.consultPhone;
    } else {
        document.getElementById('editDoctorFields').style.display = 'none';
    }

    document.getElementById('adminEditUser').classList.add('active');
    document.getElementById('adminUsers').classList.remove('active');
}

function saveEditedUser(event) {
    event.preventDefault();
    
    const user = store.users.find(u => u.id === selectedUserId);
    const doctor = store.doctors.find(d => d.userId === selectedUserId);

    user.name = document.getElementById('editUserName').value;
    user.lastname = document.getElementById('editUserLastname').value;
    user.email = document.getElementById('editUserEmail').value;
    user.cedula = document.getElementById('editUserCedula').value;
    user.phone = document.getElementById('editUserPhone').value;
    user.password = document.getElementById('editUserPassword').value;

    if (doctor) {
        doctor.specialty = document.getElementById('editDoctorSpecialty').value;
        doctor.schedule = document.getElementById('editDoctorSchedule').value;
        doctor.consultPhone = document.getElementById('editDoctorConsultPhone').value;
    }

    alert('Usuario actualizado exitosamente');
    document.getElementById('editUserForm').reset();
    showAdminSection('users');
}

function toggleUserStatus(userId) {
    const user = store.users.find(u => u.id === userId);
    if (user) {
        user.active = !user.active;
        loadUsersList();
    }
}

function updateRoleFields() {
    const roleSelect = document.getElementById('newUserRole');
    const doctorFields = document.getElementById('doctorFields');
    
    if (roleSelect.value === 'R003') {
        doctorFields.style.display = 'block';
    } else {
        doctorFields.style.display = 'none';
    }
}

function saveNewUser(event) {
    event.preventDefault();

    const newUser = {
        id: generateId('U'),
        name: document.getElementById('newUserName').value,
        lastname: document.getElementById('newUserLastname').value,
        email: document.getElementById('newUserEmail').value,
        cedula: document.getElementById('newUserCedula').value,
        phone: document.getElementById('newUserPhone').value,
        password: document.getElementById('newUserPassword').value,
        roleId: document.getElementById('newUserRole').value,
        registryDate: new Date().toISOString().split('T')[0],
        active: true
    };

    store.users.push(newUser);

    if (newUser.roleId === 'R003') {
        const doctor = {
            id: generateId('D'),
            userId: newUser.id,
            specialty: document.getElementById('doctorSpecialty').value,
            schedule: document.getElementById('doctorSchedule').value,
            consultPhone: document.getElementById('doctorConsultPhone').value
        };
        store.doctors.push(doctor);
    }

    alert('Usuario registrado exitosamente');
    document.getElementById('registerUserForm').reset();
    showAdminSection('users');
    loadUsersList();
}

function loadStatistics() {
    // Calcular estadísticas
    const activeUsers = store.users.filter(u => u.active).length;
    const doctors = store.users.filter(u => u.roleId === 'R003' && u.active).length;
    const patients = store.patients.filter(p => p.active).length;
    const totalAppointments = store.appointments.length;
    const confirmedAppointments = store.appointments.filter(a => a.status === 'Confirmada').length;
    const medicalCares = store.medicalCare.length;
    const occupancyRate = totalAppointments > 0 ? Math.round((medicalCares / totalAppointments) * 100) : 0;
    
    // Especialidades únicas
    const specialties = [...new Set(store.doctors.map(d => d.specialty))].length;

    // Actualizar tarjetas
    document.getElementById('statActiveUsers').textContent = activeUsers;
    document.getElementById('statDoctors').textContent = doctors;
    document.getElementById('statPatients').textContent = patients;
    document.getElementById('statTotalAppointments').textContent = totalAppointments;
    document.getElementById('statConfirmedAppointments').textContent = confirmedAppointments;
    document.getElementById('statMedicalCares').textContent = medicalCares;
    document.getElementById('statOccupancyRate').textContent = occupancyRate + '%';
    document.getElementById('statSpecialties').textContent = specialties;

    // Médicos por especialidad
    const doctorsBySpec = {};
    store.doctors.forEach(d => {
        doctorsBySpec[d.specialty] = (doctorsBySpec[d.specialty] || 0) + 1;
    });

    let specHtml = '<table><thead><tr><th>Especialidad</th><th>Cantidad de Médicos</th></tr></thead><tbody>';
    Object.keys(doctorsBySpec).forEach(spec => {
        specHtml += `<tr><td>${spec}</td><td>${doctorsBySpec[spec]}</td></tr>`;
    });
    specHtml += '</tbody></table>';
    document.getElementById('doctorsBySpecialty').innerHTML = specHtml;

    // Pacientes por género
    const patientsByGen = { M: 0, F: 0 };
    store.patients.forEach(p => {
        patientsByGen[p.gender]++;
    });

    let genderHtml = '<table><thead><tr><th>Género</th><th>Cantidad</th></tr></thead><tbody>';
    genderHtml += `<tr><td>Masculino</td><td>${patientsByGen['M']}</td></tr>`;
    genderHtml += `<tr><td>Femenino</td><td>${patientsByGen['F']}</td></tr>`;
    genderHtml += '</tbody></table>';
    document.getElementById('patientsByGender').innerHTML = genderHtml;

    // Citas por estado
    const appointmentsByStatus = {};
    store.appointments.forEach(a => {
        appointmentsByStatus[a.status] = (appointmentsByStatus[a.status] || 0) + 1;
    });

    let statusHtml = '<table><thead><tr><th>Estado</th><th>Cantidad</th></tr></thead><tbody>';
    Object.keys(appointmentsByStatus).forEach(status => {
        statusHtml += `<tr><td>${status}</td><td>${appointmentsByStatus[status]}</td></tr>`;
    });
    statusHtml += '</tbody></table>';
    document.getElementById('appointmentsByStatus').innerHTML = statusHtml;
}

function populateDoctorSelects() {
    const doctors = store.users.filter(u => u.roleId === 'R003' && u.active);
    const selectDoctor = document.getElementById('appointmentDoctor');
    
    selectDoctor.innerHTML = '<option value="">-- Seleccionar --</option>';
    doctors.forEach(doctor => {
        selectDoctor.innerHTML += `<option value="${doctor.id}">${doctor.name} ${doctor.lastname}</option>`;
    });
}

// ===== FUNCIONES SECRETARIO =====
function showSecretarySection(section) {
    document.querySelectorAll('#secretaryDashboard .section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('#secretaryDashboard .btn-menu').forEach(el => el.classList.remove('active'));
    
    const sectionMap = {
        'patients': { element: 'secretaryPatients', button: 0 },
        'appointments': { element: 'secretaryAppointments', button: 1 },
        'registerPatient': { element: 'secretaryRegisterPatient', button: 2 },
        'registerAppointment': { element: 'secretaryRegisterAppointment', button: 3 }
    };

    if (sectionMap[section]) {
        document.getElementById(sectionMap[section].element).classList.add('active');
        document.querySelectorAll('#secretaryDashboard .btn-menu')[sectionMap[section].button].classList.add('active');
    }

    if (section === 'patients') {
        loadPatientsList();
    } else if (section === 'appointments') {
        loadAppointmentsList();
    } else if (section === 'registerAppointment') {
        populateAppointmentSelects();
    }
}

function loadPatientsList() {
    const patientsList = document.getElementById('patientsList');
    
    if (store.patients.length === 0) {
        patientsList.innerHTML = '<div class="no-data">No hay pacientes registrados</div>';
        return;
    }

    let html = '<table><thead><tr><th>ID</th><th>Nombre</th><th>Cédula</th><th>Email</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>';
    
    store.patients.forEach(patient => {
        const stateBadge = patient.active ? 'badge-active' : 'badge-inactive';
        
        html += `
            <tr>
                <td>${patient.id}</td>
                <td>${patient.name} ${patient.lastname}</td>
                <td>${patient.cedula}</td>
                <td>${patient.email}</td>
                <td><span class="badge ${stateBadge}">${patient.active ? 'Activo' : 'Inactivo'}</span></td>
                <td>
                    <button class="btn-action btn-view" onclick="viewPatientDetail('${patient.id}')">Ver</button>
                    <button class="btn-action btn-edit" onclick="loadEditPatientForm('${patient.id}')">Editar</button>
                </td>
            </tr>
        `;
    });
    
    html += '</tbody></table>';
    patientsList.innerHTML = html;
}

function viewPatientDetail(patientId) {
    selectedPatientId = patientId;
    const patient = store.patients.find(p => p.id === patientId);
    const medicalHistory = store.medicalHistory.filter(m => m.patientId === patientId);

    let html = `
        <h3>Información del Paciente</h3>
        <div class="info-grid">
            <div class="info-item">
                <label>ID Paciente</label>
                <p>${patient.id}</p>
            </div>
            <div class="info-item">
                <label>Nombre</label>
                <p>${patient.name}</p>
            </div>
            <div class="info-item">
                <label>Apellido</label>
                <p>${patient.lastname}</p>
            </div>
            <div class="info-item">
                <label>Cédula</label>
                <p>${patient.cedula}</p>
            </div>
            <div class="info-item">
                <label>Email</label>
                <p>${patient.email}</p>
            </div>
            <div class="info-item">
                <label>Teléfono</label>
                <p>${patient.phone}</p>
            </div>
            <div class="info-item">
                <label>Fecha de Nacimiento</label>
                <p>${patient.birthDate}</p>
            </div>
            <div class="info-item">
                <label>Sexo</label>
                <p>${patient.gender === 'M' ? 'Masculino' : 'Femenino'}</p>
            </div>
            <div class="info-item">
                <label>Dirección</label>
                <p>${patient.address}</p>
            </div>
            <div class="info-item">
                <label>Contacto Emergencia</label>
                <p>${patient.emergencyContact}</p>
            </div>
            <div class="info-item">
                <label>Estado</label>
                <p><span class="badge ${patient.active ? 'badge-active' : 'badge-inactive'}">${patient.active ? 'Activo' : 'Inactivo'}</span></p>
            </div>
            <div class="info-item">
                <label>Fecha de Registro</label>
                <p>${patient.registryDate}</p>
            </div>
        </div>
    `;

    if (medicalHistory.length > 0) {
        html += '<h3 style="margin-top: 30px;">Antecedentes Médicos</h3>';
        medicalHistory.forEach(history => {
            html += `
                <div class="info-grid">
                    <div class="info-item">
                        <label>Alergias</label>
                        <p>${history.allergies}</p>
                    </div>
                    <div class="info-item">
                        <label>Enfermedades Crónicas</label>
                        <p>${history.chronic}</p>
                    </div>
                    <div class="info-item full">
                        <label>Observaciones</label>
                        <p>${history.observations}</p>
                    </div>
                    <div class="info-item">
                        <label>Fecha de Registro</label>
                        <p>${history.registryDate}</p>
                    </div>
                </div>
            `;
        });
    }

    document.getElementById('patientDetailContent').innerHTML = html;
    document.getElementById('secretaryPatientDetail').classList.add('active');
    document.getElementById('secretaryPatients').classList.remove('active');
}

function loadEditPatientForm(patientId) {
    selectedPatientId = patientId;
    const patient = store.patients.find(p => p.id === patientId);

    // Llenar el formulario con los datos actuales del paciente
    document.getElementById('editPatientName').value = patient.name;
    document.getElementById('editPatientLastname').value = patient.lastname;
    document.getElementById('editPatientCedula').value = patient.cedula;
    document.getElementById('editPatientEmail').value = patient.email;
    document.getElementById('editPatientPhone').value = patient.phone;
    document.getElementById('editPatientBirthDate').value = patient.birthDate;
    document.getElementById('editPatientGender').value = patient.gender;
    document.getElementById('editPatientAddress').value = patient.address;
    document.getElementById('editPatientEmergency').value = patient.emergencyContact;

    // Mostrar la sección de edición
    document.getElementById('secretaryPatientEdit').classList.add('active');
    document.getElementById('secretaryPatients').classList.remove('active');
}

function saveEditedPatient(event) {
    event.preventDefault();
    
    const patient = store.patients.find(p => p.id === selectedPatientId);

    // Actualizar los datos del paciente
    patient.name = document.getElementById('editPatientName').value;
    patient.lastname = document.getElementById('editPatientLastname').value;
    patient.cedula = document.getElementById('editPatientCedula').value;
    patient.email = document.getElementById('editPatientEmail').value;
    patient.phone = document.getElementById('editPatientPhone').value;
    patient.birthDate = document.getElementById('editPatientBirthDate').value;
    patient.gender = document.getElementById('editPatientGender').value;
    patient.address = document.getElementById('editPatientAddress').value;
    patient.emergencyContact = document.getElementById('editPatientEmergency').value;

    alert('Paciente actualizado exitosamente');
    document.getElementById('editPatientForm').reset();
    showSecretarySection('patients');
}

function saveNewPatient(event) {
    event.preventDefault();

    const newPatient = {
        id: generateId('P'),
        name: document.getElementById('patientName').value,
        lastname: document.getElementById('patientLastname').value,
        cedula: document.getElementById('patientCedula').value,
        email: document.getElementById('patientEmail').value,
        phone: document.getElementById('patientPhone').value,
        birthDate: document.getElementById('patientBirthDate').value,
        gender: document.getElementById('patientGender').value,
        address: document.getElementById('patientAddress').value,
        emergencyContact: document.getElementById('patientEmergency').value,
        registryDate: new Date().toISOString().split('T')[0],
        active: true
    };

    store.patients.push(newPatient);
    alert('Paciente registrado exitosamente');
    document.getElementById('registerPatientForm').reset();
    showSecretarySection('patients');
    loadPatientsList();
    populateAppointmentSelects();
}

function populateAppointmentSelects() {
    const patients = store.patients.filter(p => p.active);
    const doctors = store.users.filter(u => u.roleId === 'R003' && u.active);
    
    const selectPatient = document.getElementById('appointmentPatient');
    const selectDoctor = document.getElementById('appointmentDoctor');
    
    selectPatient.innerHTML = '<option value="">-- Seleccionar --</option>';
    patients.forEach(patient => {
        selectPatient.innerHTML += `<option value="${patient.id}">${patient.name} ${patient.lastname}</option>`;
    });

    selectDoctor.innerHTML = '<option value="">-- Seleccionar --</option>';
    doctors.forEach(doctor => {
        selectDoctor.innerHTML += `<option value="${doctor.id}">${doctor.name} ${doctor.lastname}</option>`;
    });
}

function loadAppointmentsList() {
    const appointmentsList = document.getElementById('appointmentsList');
    
    if (store.appointments.length === 0) {
        appointmentsList.innerHTML = '<div class="no-data">No hay citas registradas</div>';
        return;
    }

    let html = '<table><thead><tr><th>ID</th><th>Paciente</th><th>Médico</th><th>Fecha</th><th>Hora</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>';
    
    store.appointments.forEach(appt => {
        const patient = store.patients.find(p => p.id === appt.patientId);
        const doctor = store.users.find(u => u.id === appt.doctorId);
        
        // Determinar clase del badge según el estado
        let statusClass = 'badge';
        if (appt.status === 'Confirmada') statusClass = 'badge badge-active';
        else if (appt.status === 'Cancelada') statusClass = 'badge badge-inactive';
        else if (appt.status === 'Pendiente') statusClass = 'badge badge-warning';
        
        html += `
            <tr>
                <td>${appt.id}</td>
                <td>${patient ? patient.name + ' ' + patient.lastname : 'N/A'}</td>
                <td>${doctor ? doctor.name + ' ' + doctor.lastname : 'N/A'}</td>
                <td>${appt.date}</td>
                <td>${appt.time}</td>
                <td>
                    <select class="status-select" onchange="updateAppointmentStatus('${appt.id}', this.value)" style="padding: 4px 8px; border-radius: 4px; border: 1px solid #ddd;">
                        <option value="Pendiente" ${appt.status === 'Pendiente' ? 'selected' : ''} style="background-color: #fff3cd; color: #856404;">Pendiente</option>
                        <option value="Confirmada" ${appt.status === 'Confirmada' ? 'selected' : ''} style="background-color: #d4edda; color: #155724;">Confirmada</option>
                        <option value="Cancelada" ${appt.status === 'Cancelada' ? 'selected' : ''} style="background-color: #f8d7da; color: #721c24;">Cancelada</option>
                    </select>
                </td>
                <td>
                    <!-- Eliminado el botón Ver -->
                </td>
            </tr>
        `;
    });
    
    html += '</tbody></table>';
    appointmentsList.innerHTML = html;
}

function viewAppointmentDetail(appointmentId) {
    selectedAppointmentId = appointmentId;
    const appt = store.appointments.find(a => a.id === appointmentId);
    const patient = store.patients.find(p => p.id === appt.patientId);
    const doctor = store.users.find(u => u.id === appt.doctorId);
    const medicalCare = store.medicalCare.find(m => m.appointmentId === appointmentId);

    let html = `
        <div class="info-grid">
            <div class="info-item">
                <label>ID Cita</label>
                <p>${appt.id}</p>
            </div>
            <div class="info-item">
                <label>Paciente</label>
                <p>${patient.name} ${patient.lastname}</p>
            </div>
            <div class="info-item">
                <label>Médico</label>
                <p>${doctor.name} ${doctor.lastname}</p>
            </div>
            <div class="info-item">
                <label>Fecha</label>
                <p>${appt.date}</p>
            </div>
            <div class="info-item">
                <label>Hora</label>
                <p>${appt.time}</p>
            </div>
            <div class="info-item">
                <label>Estado</label>
                <p><span class="badge">${appt.status}</span></p>
            </div>
        </div>
    `;

    if (medicalCare) {
        html += `
            <h3 style="margin-top: 30px;">Atención Médica</h3>
            <div class="info-grid">
                <div class="info-item">
                    <label>Motivo de Consulta</label>
                    <p>${medicalCare.reason}</p>
                </div>
                <div class="info-item">
                    <label>Diagnóstico</label>
                    <p>${medicalCare.diagnosis}</p>
                </div>
                <div class="info-item full">
                    <label>Observaciones</label>
                    <p>${medicalCare.observations}</p>
                </div>
            </div>
        `;
    }

    document.getElementById('appointmentDetailContent').innerHTML = html;
    document.getElementById('secretaryAppointmentDetail').classList.add('active');
    document.getElementById('secretaryAppointments').classList.remove('active');
}

function saveNewAppointment(event) {
    event.preventDefault();

    const patientId = document.getElementById('appointmentPatient').value;
    const doctorId = document.getElementById('appointmentDoctor').value;
    const date = document.getElementById('appointmentDate').value;
    const time = document.getElementById('appointmentTime').value;

    // Verificar disponibilidad del médico
    const conflictingAppointment = store.appointments.find(a => 
        a.doctorId === doctorId && a.date === date && a.time === time && a.status !== 'Cancelada'
    );

    if (conflictingAppointment) {
        alert('El médico ya tiene una cita a esa hora');
        return;
    }

    // Verificar disponibilidad del paciente
    const patientConflict = store.appointments.find(a => 
        a.patientId === patientId && a.date === date && a.time === time && a.status !== 'Cancelada'
    );

    if (patientConflict) {
        alert('El paciente ya tiene una cita a esa hora');
        return;
    }

    const newAppointment = {
        id: generateId('A'),
        patientId: patientId,
        doctorId: doctorId,
        date: date,
        time: time,
        status: document.getElementById('appointmentStatus').value,
        createdDate: new Date().toISOString().split('T')[0]
    };

    store.appointments.push(newAppointment);
    alert('Cita registrada exitosamente');
    document.getElementById('registerAppointmentForm').reset();
    showSecretarySection('appointments');
    loadAppointmentsList();
}

function updateAppointmentStatus(appointmentId, newStatus) {
    const appt = store.appointments.find(a => a.id === appointmentId);
    if (appt) {
        appt.status = newStatus;
        alert(`Estado de la cita ${appointmentId} actualizado a: ${newStatus}`);
        
        // Recargar la lista para actualizar los estilos si es necesario
        loadAppointmentsList();
    }
}

function updateAppointmentStatus(appointmentId, newStatus) {
    const appt = store.appointments.find(a => a.id === appointmentId);
    if (appt) {
        appt.status = newStatus;
        alert(`✅ Estado de la cita ${appointmentId} actualizado a: ${newStatus}`);
        
        // Recargar la lista para actualizar los estilos si es necesario
        loadAppointmentsList();
    }
}

// ===== FUNCIONES MÉDICO =====
function showDoctorSection(section) {
    document.querySelectorAll('#doctorDashboard .section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('#doctorDashboard .btn-menu').forEach(el => el.classList.remove('active'));
    
    const sectionMap = {
        'patients': { element: 'doctorPatients', button: 0 },
        'appointments': { element: 'doctorAppointments', button: 1 },
        'medicalCare': { element: 'doctorMedicalCare', button: 2 },
        'medicalHistory': { element: 'doctorMedicalHistory', button: 3 }
    };

    if (sectionMap[section]) {
        document.getElementById(sectionMap[section].element).classList.add('active');
        document.querySelectorAll('#doctorDashboard .btn-menu')[sectionMap[section].button].classList.add('active');
    }

    if (section === 'patients') {
        loadDoctorPatients();
    } else if (section === 'appointments') {
        loadDoctorAppointments();
    }
}

function loadDoctorPatients() {
    // Los médicos ven todos los pacientes activos
    const patients = store.patients.filter(p => p.active);

    const doctorPatientsList = document.getElementById('doctorPatientsList');
    
    if (patients.length === 0) {
        doctorPatientsList.innerHTML = '<div class="no-data">No hay pacientes registrados</div>';
        return;
    }

    let html = '<table><thead><tr><th>ID</th><th>Nombre</th><th>Cédula</th><th>Email</th><th>Teléfono</th><th>Acciones</th></tr></thead><tbody>';
    
    patients.forEach(patient => {
        html += `
            <tr>
                <td>${patient.id}</td>
                <td>${patient.name} ${patient.lastname}</td>
                <td>${patient.cedula}</td>
                <td>${patient.email}</td>
                <td>${patient.phone}</td>
                <td>
                    <button class="btn-action btn-view" onclick="viewDoctorPatientDetail('${patient.id}')">Ver Expediente</button>
                </td>
            </tr>
        `;
    });
    
    html += '</tbody></table>';
    doctorPatientsList.innerHTML = html;
}

function viewDoctorPatientDetail(patientId) {
    const patient = store.patients.find(p => p.id === patientId);
    const medicalHistory = store.medicalHistory.filter(m => m.patientId === patientId);
    
    // Obtener todas las atenciones médicas de este paciente
    const medicalCares = store.medicalCare.filter(m => m.patientId === patientId);

    let html = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h3>Expediente Médico - ${patient.name} ${patient.lastname}</h3>
            <div>
                <button class="btn-action btn-edit" onclick="editMedicalHistory('${patientId}')">Editar Antecedentes</button>
            </div>
        </div>
        
        <div class="info-grid">
            <div class="info-item">
                <label>ID Paciente</label>
                <p>${patient.id}</p>
            </div>
            <div class="info-item">
                <label>Nombre</label>
                <p>${patient.name}</p>
            </div>
            <div class="info-item">
                <label>Apellido</label>
                <p>${patient.lastname}</p>
            </div>
            <div class="info-item">
                <label>Cédula</label>
                <p>${patient.cedula}</p>
            </div>
            <div class="info-item">
                <label>Email</label>
                <p>${patient.email}</p>
            </div>
            <div class="info-item">
                <label>Teléfono</label>
                <p>${patient.phone}</p>
            </div>
            <div class="info-item">
                <label>Fecha de Nacimiento</label>
                <p>${patient.birthDate} (${calculateAge(patient.birthDate)} años)</p>
            </div>
            <div class="info-item">
                <label>Sexo</label>
                <p>${patient.gender === 'M' ? 'Masculino' : 'Femenino'}</p>
            </div>
            <div class="info-item">
                <label>Dirección</label>
                <p>${patient.address}</p>
            </div>
            <div class="info-item">
                <label>Contacto Emergencia</label>
                <p>${patient.emergencyContact}</p>
            </div>
        </div>
    `;

    if (medicalHistory.length > 0) {
        html += '<h3 style="margin-top: 30px;">Antecedentes Médicos</h3>';
        medicalHistory.forEach(history => {
            const doctor = store.users.find(u => u.id === history.doctorId);
            html += `
                <div class="info-grid" style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
                    <div class="info-item">
                        <label>Alergias</label>
                        <p>${history.allergies}</p>
                    </div>
                    <div class="info-item">
                        <label>Enfermedades Crónicas</label>
                        <p>${history.chronic}</p>
                    </div>
                    <div class="info-item full">
                        <label>Observaciones</label>
                        <p>${history.observations || 'Sin observaciones'}</p>
                    </div>
                    <div class="info-item">
                        <label>Registrado por</label>
                        <p>${doctor ? doctor.name + ' ' + doctor.lastname : 'N/A'}</p>
                    </div>
                    <div class="info-item">
                        <label>Fecha de Registro</label>
                        <p>${history.registryDate}</p>
                    </div>
                </div>
            `;
        });
    } else {
        html += `
            <div style="margin-top: 30px; text-align: center; padding: 20px; background: #f9f9f9; border-radius: 5px;">
                <p>No hay antecedentes médicos registrados.</p>
            </div>
        `;
    }

    if (medicalCares.length > 0) {
        html += `
            <h3 style="margin-top: 30px;">Historial de Atenciones Médicas</h3>
            <div style="max-height: 400px; overflow-y: auto;">
        `;
        
        // Ordenar por fecha descendente (más recientes primero)
        medicalCares.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        medicalCares.forEach((care, index) => {
            const doctor = store.users.find(u => u.id === care.doctorId);
            const isCurrentDoctor = care.doctorId === currentUser.id;
            
            html += `
                <div class="care-item" style="border: 1px solid ${isCurrentDoctor ? '#007bff' : '#ddd'}; padding: 15px; margin-bottom: 10px; border-radius: 5px; cursor: pointer; background: ${isCurrentDoctor ? '#f0f8ff' : '#fff'};" 
                     onclick="toggleCareDetail('care${index}')">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <strong>${care.date} - ${care.reason}</strong>
                            <br>
                            <small>Por: ${doctor ? doctor.name + ' ' + doctor.lastname : 'N/A'} ${isCurrentDoctor ? '(Yo)' : ''}</small>
                        </div>
                        <span style="font-size: 18px;">▼</span>
                    </div>
                    <div id="care${index}" style="display: none; margin-top: 10px; padding-top: 10px; border-top: 1px solid #eee;">
                        <div class="info-grid">
                            <div class="info-item">
                                <label>Diagnóstico</label>
                                <p>${care.diagnosis}</p>
                            </div>
                            <div class="info-item full">
                                <label>Observaciones</label>
                                <p>${care.observations || 'Sin observaciones'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
    } else {
        html += `
            <div style="margin-top: 30px; text-align: center; padding: 20px; background: #f9f9f9; border-radius: 5px;">
                <p>No hay atenciones médicas registradas para este paciente.</p>
            </div>
        `;
    }

    document.getElementById('doctorPatientDetailContent').innerHTML = html;
    document.getElementById('doctorPatientDetail').classList.add('active');
    document.getElementById('doctorPatients').classList.remove('active');
}

// Función para mostrar/ocultar detalles de atención médica
function toggleCareDetail(careId) {
    const element = document.getElementById(careId);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

function loadDoctorAppointments() {
    const doctorAppointments = store.appointments.filter(a => a.doctorId === currentUser.id);
    const doctorAppointmentsList = document.getElementById('doctorAppointmentsList');

    if (doctorAppointments.length === 0) {
        doctorAppointmentsList.innerHTML = '<div class="no-data">No hay citas asignadas</div>';
        return;
    }

    let html = '<table><thead><tr><th>ID</th><th>Paciente</th><th>Fecha</th><th>Hora</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>';
    
    doctorAppointments.forEach(appt => {
        const patient = store.patients.find(p => p.id === appt.patientId);
        
        // Determinar clase del badge según el estado
        let statusClass = 'badge';
        if (appt.status === 'Confirmada') statusClass = 'badge badge-active';
        else if (appt.status === 'Cancelada') statusClass = 'badge badge-inactive';
        else if (appt.status === 'Pendiente') statusClass = 'badge badge-warning';
        
        html += `
            <tr>
                <td>${appt.id}</td>
                <td>${patient ? patient.name + ' ' + patient.lastname : 'N/A'}</td>
                <td>${appt.date}</td>
                <td>${appt.time}</td>
                <td><span class="${statusClass}">${appt.status}</span></td>
                <td>
                    <!-- Eliminado el botón Ver -->
                </td>
            </tr>
        `;
    });
    
    html += '</tbody></table>';
    doctorAppointmentsList.innerHTML = html;
}

function viewDoctorAppointmentDetail(appointmentId) {
    selectedAppointmentId = appointmentId;
    const appt = store.appointments.find(a => a.id === appointmentId);
    const patient = store.patients.find(p => p.id === appt.patientId);

    let html = `
        <div class="info-grid">
            <div class="info-item">
                <label>ID Cita</label>
                <p>${appt.id}</p>
            </div>
            <div class="info-item">
                <label>Paciente</label>
                <p>${patient.name} ${patient.lastname}</p>
            </div>
            <div class="info-item">
                <label>Fecha</label>
                <p>${appt.date}</p>
            </div>
            <div class="info-item">
                <label>Hora</label>
                <p>${appt.time}</p>
            </div>
            <div class="info-item">
                <label>Estado</label>
                <p><span class="badge">${appt.status}</span></p>
            </div>
        </div>
    `;

    document.getElementById('doctorAppointmentDetailContent').innerHTML = html;
    document.getElementById('doctorAppointmentDetail').classList.add('active');
    document.getElementById('doctorAppointments').classList.remove('active');
}

function populateDoctorAppointmentSelects() {
    const doctorAppointments = store.appointments.filter(a => a.doctorId === currentUser.id);
    const patients = store.patients.filter(p => p.active);
    
    const selectAppointment = document.getElementById('careAppointment');
    const selectPatient = document.getElementById('historyPatient');
    
    selectAppointment.innerHTML = '<option value="">-- Seleccionar --</option>';
    doctorAppointments.forEach(appt => {
        const patient = store.patients.find(p => p.id === appt.patientId);
        // Solo mostrar citas que no tengan atención médica registrada
        const hasMedicalCare = store.medicalCare.find(m => m.appointmentId === appt.id);
        if (!hasMedicalCare) {
            selectAppointment.innerHTML += `<option value="${appt.id}">${patient.name} ${patient.lastname} - ${appt.date} ${appt.time}</option>`;
        }
    });

    selectPatient.innerHTML = '<option value="">-- Seleccionar --</option>';
    patients.forEach(patient => {
        selectPatient.innerHTML += `<option value="${patient.id}">${patient.name} ${patient.lastname}</option>`;
    });

    // Establecer fecha actual automáticamente
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('careDate').value = today;
}

function saveMedicalCare(event) {
    event.preventDefault();

    const appointmentId = document.getElementById('careAppointment').value;
    const appointment = store.appointments.find(a => a.id === appointmentId);

    const newMedicalCare = {
        id: generateId('MC'),
        appointmentId: appointmentId,
        patientId: appointment.patientId,
        doctorId: currentUser.id,
        date: document.getElementById('careDate').value,
        reason: document.getElementById('careReason').value,
        diagnosis: document.getElementById('careDiagnosis').value,
        observations: document.getElementById('careObservations').value,
        createdDate: new Date().toISOString().split('T')[0]
    };

    store.medicalCare.push(newMedicalCare);
    alert('Atención médica registrada exitosamente');
    document.getElementById('medicalCareForm').reset();
}

function saveMedicalHistory(event) {
    event.preventDefault();

    const patientId = document.getElementById('historyPatient').value;
    const editId = document.getElementById('medicalHistoryForm').dataset.editId;

    if (editId) {
        // Actualizar antecedente existente
        const history = store.medicalHistory.find(m => m.id === editId);
        history.allergies = document.getElementById('historyAllergies').value;
        history.chronic = document.getElementById('historyChronic').value;
        history.observations = document.getElementById('historyObservations').value;
        alert('Antecedente médico actualizado exitosamente');
    } else {
        // Nuevo antecedente
        const newMedicalHistory = {
            id: generateId('MH'),
            patientId: patientId,
            doctorId: currentUser.id,
            allergies: document.getElementById('historyAllergies').value,
            chronic: document.getElementById('historyChronic').value,
            observations: document.getElementById('historyObservations').value,
            registryDate: new Date().toISOString().split('T')[0]
        };

        store.medicalHistory.push(newMedicalHistory);
        alert('Antecedente médico registrado exitosamente');
    }

    document.getElementById('medicalHistoryForm').reset();
    
    // Volver directamente al detalle del paciente
    viewDoctorPatientDetail(patientId);
}

function editMedicalHistory(patientId) {
    const existingHistory = store.medicalHistory.find(m => m.patientId === patientId);
    const patient = store.patients.find(p => p.id === patientId);
    
    if (existingHistory) {
        // Editar antecedente existente
        document.getElementById('historyPatient').value = patientId;
        document.getElementById('historyAllergies').value = existingHistory.allergies;
        document.getElementById('historyChronic').value = existingHistory.chronic;
        document.getElementById('historyObservations').value = existingHistory.observations;
        
        // Cambiar texto del botón
        const submitButton = document.querySelector('#medicalHistoryForm button');
        submitButton.textContent = 'Actualizar Antecedente';
        submitButton.classList.add('btn-update');
        
        // Guardar el ID del antecedente para actualizar
        document.getElementById('medicalHistoryForm').dataset.editId = existingHistory.id;
    } else {
        // Nuevo antecedente
        document.getElementById('historyPatient').value = patientId;
        document.getElementById('historyAllergies').value = '';
        document.getElementById('historyChronic').value = '';
        document.getElementById('historyObservations').value = '';
        
        // Cambiar texto del botón
        const submitButton = document.querySelector('#medicalHistoryForm button');
        submitButton.textContent = 'Registrar Antecedente';
        submitButton.classList.remove('btn-update');
        
        // Remover ID de edición si existe
        if (document.getElementById('medicalHistoryForm').dataset.editId) {
            delete document.getElementById('medicalHistoryForm').dataset.editId;
        }
    }
    
    // Ir a la sección de antecedentes médicos
    showDoctorSection('medicalHistory');
}

// Modificar la función saveMedicalHistory para que también actualice
function saveMedicalHistory(event) {
    event.preventDefault();

    const patientId = document.getElementById('historyPatient').value;
    const editId = document.getElementById('medicalHistoryForm').dataset.editId;

    if (editId) {
        // Actualizar antecedente existente
        const history = store.medicalHistory.find(m => m.id === editId);
        history.allergies = document.getElementById('historyAllergies').value;
        history.chronic = document.getElementById('historyChronic').value;
        history.observations = document.getElementById('historyObservations').value;
        alert('Antecedente médico actualizado exitosamente');
    } else {
        // Nuevo antecedente
        const newMedicalHistory = {
            id: generateId('MH'),
            patientId: patientId,
            doctorId: currentUser.id,
            allergies: document.getElementById('historyAllergies').value,
            chronic: document.getElementById('historyChronic').value,
            observations: document.getElementById('historyObservations').value,
            registryDate: new Date().toISOString().split('T')[0]
        };

        store.medicalHistory.push(newMedicalHistory);
        alert('Antecedente médico registrado exitosamente');
    }

    document.getElementById('medicalHistoryForm').reset();
    
    // Volver al detalle del paciente
    viewDoctorPatientDetail(patientId);
}

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

function toggleCareDetail(careId) {
    const element = document.getElementById(careId);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}