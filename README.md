# React

- **Library** javascript untuk membuat antarmuka pengguna (UI) yang interaktif
- **Antarmuka pengguna** adalah elemen pada layar yang dapat dilihat dan berinteraksi dengan user
- Disebut library karena menyediakan fungsi-fungsi untuk membangun UI, tapi terserah developer untuk menggunakan fungsinya
- Relatif **un-opinionated** (cara menggunakannya tidak terlalu diatur)
- Menyebabkan ekosistem-nya berkembang
- Tools pihak ketiga-nya banyak
- Dibuat tahun 2013 oleh **Jordan Walke** (Engineer Facebook)
- Dibuat karena Facebook semakin besar (FB Ads, Chat, integrasi Instagram, Mobile App) sehingga UI harus semakin mudah dikelola
- Disebut React karena fitur utamanya adalah 'reactive' yang artinya kemampuan untuk bereaksi atau merespon secara dinamis ketika ada interaksi atau perubahan data
- Saat ini tim pembuat React adalah engineer dari Meta, Vercel dan kontributor dari seluruh dunia
- Sudah diunduh sebanyak 19,3 juta kali di NPM dan memiliki 200 ribu lebih star di Github

## Me-render Antarmuka
Bagaimana browser menginterpretasi code kita untuk menghasilkan UI yang interaktif. 
![image](https://github.com/fnurrahmah125/wpu_react-js/assets/54012198/518db17b-012c-4965-abdd-59207b8c45c1)

## Manipulasi DOM menggunakan Javascript
- HTML merepresentasikan konten halaman awal
- DOM merepresentasikan konten halaman yang telah diperbaharui
- Mengubah DOM menggunakan javascript 'polos' cukup ribet

## Imperative dan Declarative Programming
- Imperative Programming menuliskan langkah demi langkah bagaimana sesuatu harus dilakukan
- Declarative Programming menuliskan apa yang akan dihasilkan
- React merupakan sebuah UI library yang declarative

## JSX
- **JSX** adalah ekstensi sintaks untuk javascript yang dapat mendeskripsikan UI dengan sintaks seperti HTML
- Sintaks JSX terlihat seperti HTML tapi lebih strict dalam penulisannya dan bisa menampilkan informasi yang dinamis
- Untuk menulisnya kita harus ingat 3 aturan JSX
  - Selalu mengembalikan satu elemen
  - Selalu tutup semua tag
  - Gunakan camelCase untuk atribut
    ```javascript
    const container = document.getElementById("root");
    const root = ReactDOM.createRoot(container);
    root.render(
      <>
        <h1 className="heading">Belajar React bareng WPU</h1>
        <img src="img/img.png" width="80" alt="My Image" />
        <p onClick={e => {alert('ok!')}}>Belajar React itu mudah!</p>
      </>
    );
    ```
## Prerequisite

### Materi yang harus dikuasai:
- HTML & CSS
- Javascript Fundamentals
- DOM
- Modern Javascript (ES6)
  - ES6 variables (let & const)
  - Functions & Arrow functions
  - Object & Classes
  - Arrays & Array Methods
  - Destructuring
  - Template Literals
  - Ternary Operators
  - ES Modules & Import / Export Syntax
- Git & CLI
- Package Manager (NodeJS + NPM)

### Editor Setup:
- Code Editor: **VSCode**
- Linter: **ESLint**
- Code Formatter: **Prettier**
- Browser Extension: **React Developer Tools**

## Konsep Utama pada React

**Core Concepts:**
- **Components**
  - **Membuat UI Menggunakan Komponen**
    - UI bisa dipecah menjadi bagian-bagian kecil yang disebut dengan komponen
    - Dengan komponen kita bisa membuat potongan kode yang mandiri dan bisa digunakan kembali
    - Jika kita ingin mengubah sebuah elemen pada UI, kita hanya perlu mengubah komponennya saja
      ![image](https://github.com/fnurrahmah125/wpu_react-js/assets/54012198/0241b18b-29af-47d9-96f8-5b8317857e33)
  - **Membuat Komponen**
    - Komponen pada React pada dasarnya adalah function pada javascript
    - Nama function ditulis diawali dengan huruf besar
    - Function mengembalikan elemen UI yang akan dijadikan komponen dan ditulis dengan JSX
    - Dipanggil sebagai tag HTML saat dirender
    ```javascript  
    function Header() {
      return <h1>Learn React with WPU 🚀</h1>;
    }
  
    root.render(<Header />);
    ```
  - **Komponen Bersarang**
    - Sebuah aplikasi biasanya di dalamnya terdapat banyak komponen
    - Kita bisa menyimpan sebuah komponen di dalam komponen lain
    - Misalnya kita mau memasukkan komponen **Header** ke dalam komponen **HomePage**
    - Buat function untuk setiap komponen yang akan dibuat
    ```javascript
    function Header() {
      return <h1>Learn React with WPU 🚀</h1>;
    }

    function HomePage() {
      return (
        <>
          <Header />
        </>
      );
    }

    root.render(<HomePage />);
    ```
  - **Menggunakan Kembali Komponen**
    - Kita bisa menggunakan komponen berulang-ulang dengan menuliskan tag-nya kembali
    ```javascript
    function HomePage() {
      return (
        <>
          <Header />
          <Header />
        </>
      );
    }
    ```
- **Props**
  - **Menampilkan Data Menggunakan Props**
    - Di dalam HTML biasa kita bisa menggunakan atribut untuk mengubah perilaku dari sebuah elemen
    - Seperti contohnya atribut src di dalam elemen img bisa mengubah sumber gambar yang akan ditampilkan
    - Props tersebut ditangkap sebagai object saat komponen dibuat
    ```javascript
    function Header(props) {
      return <h1>Learn React with {props.author} 🚀</h1>;
    }

    function HomePage() {
      return (
        <>
          <Header author="WPU" />
          <Header author="Web Programming Unpas" />
        </>
      );
    }
    ```
  - **Props Refactor**
    -  Gunakan destructuring, ternary operator
    ```javascript
    function Header({ author }) {
      return <h1>Learn React with {author ? author : "WPU"} 🚀</h1>;
    }

    function HomePage() {
      return (
        <>
          <Header />
          <Header author="Web Programming Unpas" />
        </>
      );
    }
    ```
  - **Menampilkan Elemen Menggunakan Pengulangan**
    - Salah satu caranya adalah dengan menggunakan method pada array
    - Untuk memanipulasi data dan menampilkan elemen UI yang identik secara style tapi berbeda informasinya
    ```javascript
    function HomePage() {
      const mahasiswa = ["Mahasiswa 1", "Mahasiswa 2", "Mahasiswa 3"];
      return (
        <>
          <Header />
          <ul>
            {mahasiswa.map((mhs) => (
              <li key={mhs}>{mhs}</li>
            ))}
          </ul>
        </>
      );
    }
    ```
  **Unique Key**
  - React butuh sesuatu untuk menandai sebuah elemen dengan nilai yang unik karena React harus tau elemen mana yang berubah
- **State**
  - **Menambah Interaktivitas dengan State**
    - Banyak hal di halaman yang berubah karena ada interaksi yang dilakukan user
    - Pada React data yang berubah seiring waktu disebut dengan **State**
    - Untuk menambahkan interaktivitas pada elemen bisa menggunakan **State** dan juga **Event Handler**
  - **State dan Hooks**
    - Misalnya kita akan membuat tombol yang jika diklik akan menambah jumlah angka sesuai dengan berapa kali tombol diklik
    - React punya serangkaian function yang disebut dengan Hooks, yang memungkinkan kita menambahkan logic pada komponen kita
    - Salah satu Hooks yang bisa digunakan untuk mengelola **state** adalah **setState()** yang mengembalikan nilai berupa **array** dan bisa kita akses menggunakan teknik **destructuring**
    - **Elemen pertama** pada array adalah **nilai statenya** dan **elemen kedua** merupakan function untuk **mengubah nilainya**
    - Nama function boleh apa saja tapi biasanya diawali dengan **set** lalu nama nilai statenya
      ```javascript
      const [likes, setLikes] = React.useState();
      ```
    - Kita juga bisa memberi nilai awal pada nilai statenya dengan mengisi argumen pada **useState()**
      ```javascript
      const [likes, setLikes] = React.useState(0);
      ```
    - **State Updater Function**
      - Untuk menjalankan function yang mengubah statenya kita bisa panggil di dalam sebuah function lain di dalam komponen kita
      ```javascript
      function handleClick() {
        setLikes(likes + 1);
      }
      ```
    - **Event Handler**
      ```javascript
      <button onClick={handleClick}>Like ({likes})</button>
      ```

## Component

- **Aplikasi React** terbuat dari komponen-komponen
- Komponen pada React pada dasarnya adalah **function pada javascript**
- Komponen adalah **bagian dari UI** yang memiliki **logika** dan **tampilan** sendiri
- Bisa **sekecil** tombol atau **sebesar** seluruh halaman

### Tips membuat component

- Pisahkan UI secara logis antara **content** dan **layout**
- Pikirkan **reusability**
- Perhatikan **kompleksitas**
- Gaya / kebiasaan **coding**
- Mulai dari **komponen besar** lalu **pecah**

### Pertanyaan

- Apakah di dalam komponen terdapat 'bagian' konten atau layout yang bisa dipisahkan?
- Apaakah mungkin untuk digunakan kembali?
- Apakah komponen melakukan terlalu banyak hal?
- Apakah terlalu bergantung pada banyak props?
- Apakah JSX nya jadi terlalu kompleks?

Jika jawabannya iya maka kemungkinan **butuh komponen baru**

### Kategori Component

1. Stateless / presentational
  - Tidak memiliki state
  - Menerima props untuk menampilkan data / konten
  - Biasanya komponen kecil dan reusable

2. Stateful
  - Memiliki state
  - Bisa dibuat reusable

3. Structural
  - Berperan untuk membuat struktur aplikasi (layout, screen, pages)
  - Dihasilkan dari komposisi
  - Berukuran besar dan biasanya non-reusable

### Component Composition

- Sebuah teknik untuk **merancang/membuat komponen**
- Proses **memecah bagian-bagian** menjadi komponen kecil, lalu menggabungkannya menjadi komponen yang lebih besar
- Bertujuan agar komponen-komponen tersebut **mudah untuk dikelola** dan digunakan kembali

#### Manfaat

- *Reusability*: Komponen dapat dengan mudah digunakan kembali di berbagai tempat pada aplikasi kita
- *Modularity*: Memecah UI menjadi komponen kecil agar mudah untuk dikelola dan dipahami
- *Separation of Concerns*: Setiap komponen dapat fokus pada fungsionalitasnya yang spesifik agar mudah untuk di-test/debug
- *Code Maintainability*: Mudah untuk diubah di kemudian hari

#### Caranya

- Buat komponen agar mengerjakan hal yang spesifik
- Gunakan **"Container Component"**
  - Memanfaatkan prop spesial: **children**
  - Bisa digunakan untuk memperbaiki **prop drilling**

> mengatasi prop drilling bisa menggunakan **Lifting State Up**

```javascript
function Modal({children}) {
  return (
    <div className="modal">
      {children}
    </div>
  )
}
```

```javascript
function Success() {
  return (
    <div className="modal-body">
      <p>Success</p>
    </div>
  )
}
```
```javascript
export default function App() {
  return (
    <Modal>
      <Success />
    </Modal>
  )
}
```

## Next?

- Bagaimana React bekerja
  - Render & commit
  - Virtual DOM
- Bagaimana mengelola State
- Bagaimana menggunakan Context
- Memahami apa itu Lifecycle
- Bagaimana menggunakan Hooks
- ...

