.# 🚀 Node.js + Express.js + PostgreSQL (No ORM) API

## 📦 Proje Hakkında

Bu proje, **Node.js** ve **Express.js** kullanarak oluşturulmuş basit bir RESTful API'dir. 
Amaç, doğrudan SQL sorguları ile PostgreSQL veritabanı üzerinden kullanıcı yönetimi (CRUD) işlemlerini gerçekleştirmektir.

ORM (Object-Relational Mapping) kütüphaneleri yerine doğrudan SQL kullanılarak veri tabanı işlemleri yapılmaktadır.

## 🎯 Özellikler

- PostgreSQL ile doğrudan bağlantı
- Express ile RESTful endpoint yapısı
- CRUD işlemleri (`GET`, `POST`, `DELETE`)
- .env dosyası üzerinden yapılandırma

## 🔧 Kurulum Adımları

### 1. Bağımlılıkları Yükleyin

```bash
npm install
```

### 2. Ortam Değişkenlerini Ayarlayın

`.env` dosyanıza aşağıdaki değişkenleri ekleyin:

```env
DATABASE_USER=your_username
DATABASE_PASSWORD=your_password
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=your_db_name
PORT=3000
```

### 3. Sunucuyu Başlatın

```bash
node express.js
```

## 📁 Proje Yapısı

```bash
project-root/
├── node_modules/
├── .env.exp
├── .gitattributes
├── express.js        # Ana sunucu dosyası
├── package.json
└── README.md
```

## 🚀 API Endpointleri

### GET `/users`

Tüm kullanıcıları listeler.

### POST `/users`

Yeni kullanıcı ekler.

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

### DELETE `/users/:id`

Belirtilen ID'ye sahip kullanıcıyı siler.

## 🧠 Kullanılan Teknolojiler

- Node.js
- Express.js
- PostgreSQL
- dotenv

## ✍️ Geliştirici Notu

Bu proje, doğrudan SQL kullanarak veritabanı işlemleri yapmayı öğrenmek isteyen geliştiriciler için hazırlanmıştır.
ORM kullanılmadan PostgreSQL ile veri yönetimi gerçekleştirilmektedir.
