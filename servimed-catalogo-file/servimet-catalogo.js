// Clase Product para instrumentos quirúrgicos
class Product {
    constructor(name, price, source) {
        this.name = name;
        this.price = price;
        this.source = source;
    }
    
    // Método para formatear el precio
    getFormattedPrice() {
        return `$${this.price.toFixed(2)}`;
    }
    
    // Método para mostrar información del producto
    displayInfo() {
        return `${this.name} - ${this.getFormattedPrice()}`;
    }
}

// Función para generar un precio aleatorio entre 10 y 100
function generateRandomPrice() {
    return (Math.random() * 90 + 10).toFixed(2);
}

// Array de 50 instrumentos quirúrgicos
const surgicalInstruments = [
    new Product("Bisturí #10", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Bisturí #11", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Bisturí #15", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Bisturí #20", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Bisturí #21", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Bisturí #22", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Bisturí #23", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Bisturí #24", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Escalpelo Quirúrgico", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Mayo", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Metzenbaum", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Iris", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Suture", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Disección", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Potts", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Liston", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Cooper", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Wire", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Bandage", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Trauma", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Angulación", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Microcirugía", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Oftalmología", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Neurocirugía", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Cardio", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Plastía", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Endoscopia", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Laparoscopia", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Artroscopia", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Biopsia", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),

    // Pinzas hemostáticas (31-60)
    new Product("Pinza Hemostática Kelly", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Mosquito", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Rochester", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Mixter", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Crile", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Halstead", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Kocher", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Allis", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Babcock", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Foerster", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Sponge", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Backhaus", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Towel", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Pennington", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Duval", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Allis", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Babcock", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Russian", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Adson", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Brown", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática DeBakey", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Cooley", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Castroviejo", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Gerald", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Jewelers", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Bishop", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática College", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Dressing", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Tissue", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza Hemostática Debakey", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),

    // Retractores y separadores (61-90)
    new Product("Separador de Richardson", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Separador de Army-Navy", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Gelpi", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Weitlaner", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Roux", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Meyerding", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Volkmann", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Farabeuf", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Langenbeck", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Deaver", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Harrington", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Balfour", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Finochietto", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Bookwalter", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Omni", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Thompson", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Israel", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Parker", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Senn", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Ragnell", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Jackson", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Green", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Goelet", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Crile", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Doyen", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Mathieu", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Sims", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Jansen", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Love", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Taylor", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),

    // Instrumentos de sutura (91-120)
    new Product("Portaagujas Webster", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Portaagujas Mayo", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Portaagujas Hegar", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Portaagujas Olsen", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Portaagujas Ryder", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Portaagujas Derf", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Portaagujas Castroviejo", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Portaagujas Barraquer", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Portaagujas Micro", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Aguja Quirúrgica 3-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Aguja Quirúrgica 4-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Aguja Quirúrgica 5-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Aguja Quirúrgica 6-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sutura Nylon 3-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sutura Vicryl 2-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sutura Seda 4-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sutura PDS 3-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sutura Prolene 4-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sutura Ethibond 2-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sutura Monocryl 3-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sutura Maxon 4-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sutura Chromic 3-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sutura Dexon 2-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sutura Tevdek 4-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sutura Mersilk 3-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sutura Nurolon 2-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sutura Surgilon 4-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sutura Dermalon 3-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sutura Ethilon 2-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sutura Supramid 4-0", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),

    // Instrumentos especializados (121-150)
    new Product("Pinza de Biopsia", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Trocar de 5mm", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Trocar de 10mm", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Cánula de Succión", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Electrodo Bipolar", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Electrodo Monopolar", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza de Laparoscopia", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Laparoscopia", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Grapadora Quirúrgica", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Aplicador de Grapas", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Dilatador Uterino", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Speculum Vaginal", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Otoscopio", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Oftalmoscopio", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Martillo de Reflejos", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Estetoscopio", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Bajalenguas", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Termómetro Clínico", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tensiómetro", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Guantes Quirúrgicos", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Mascarilla Quirúrgica", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Gorro Quirúrgico", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Bata Quirúrgica", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Campo Quirúrgico", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Jeringa de 10ml", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Jeringa de 20ml", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Aguja Hipodérmica 18G", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Aguja Hipodérmica 21G", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Aguja Hipodérmica 25G", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Escalpelo Eléctrico", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),

    // Instrumentos de diagnóstico (151-180)
    new Product("Laringoscopio Miller", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Laringoscopio Macintosh", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Broncoscopio Flexible", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Gastroscopio", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Colonoscopio", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Cistoscopio", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Nefroscopio", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Artroscopio", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Toracoscopio", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Mediastinoscopio", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Histeroscopio", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Laparoscopio 5mm", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Laparoscopio 10mm", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Endoscopio Rígido", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Endoscopio Flexible", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Duodenoscopio", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sigmoidoscopio", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Proctoscopio", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Anoscopio", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Otoscopio Neumático", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Oftalmoscopio Directo", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Oftalmoscopio Indirecto", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retinoscopio", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Queratometro", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tonometro", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Lámpara de Hendidura", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Gonioscopio", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Ecógrafo Portátil", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Doppler Vascular", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Monitor de Signos", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),

    // Instrumentos ortopédicos (181-210)
    new Product("Osteotomo", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Martillo Ortopédico", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Gubia", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Escoplo", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sierra de Gigli", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sierra Oscilante", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sierra de Mano", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Fresa Quirúrgica", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Taladro Ortopédico", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Broca Ortopédica", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza de Hueso", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tenótomo", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Periostótomo", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Raspador de Hueso", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Cureta", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Elevador de Hueso", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Separador de Hueso", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor de Hueso", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza de Fragmentos", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Alicate Ortopédico", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Llave de Torsión", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Destornillador Ortopédico", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza de Placa", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Portaagujas Ortopédico", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Aguja Ortopédica", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Alambre de Kirschner", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Clavo Intramedular", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Placa de Compresión", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tornillo Cancelo", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Prótesis de Cadera", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),

    // Instrumentos de neurocirugía (211-240)
    new Product("Craneótomo", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Perforador Craneal", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Fresa de Craneo", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Raspador Craneal", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Elevador de Duro", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza de Aneurisma", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Clip de Aneurisma", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Aplicador de Clips", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Disector Neuro", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Separador Neuro", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Retractor Neuro", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Bisturí de Diamante", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Micro", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza de Micro", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Portaagujas de Micro", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Aguja de Micro", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sutura de Micro", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Aspirador Neuro", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Cánula de Ventrículo", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Shunt Ventricular", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Monitor de Presión", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Electrodo Cortical", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Estimulador Cortical", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Ultrasonido Neuro", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Láser de CO2", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Microscopio Quirúrgico", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Navegador Stereotáctico", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Marcador de Tumor", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Biopsia Stereotáctica", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Sistema de Neuronavegación", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),

    // Instrumentos varios (241-250)
    new Product("Pinza de Campo", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza de Sponge", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza de Towel", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza de Dressing", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza de Tissue", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza de Debakey", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza de Russian", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza de Adson", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza de Brown", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Pinza de Cooley", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg")
];
const mainContainer = document.getElementById('main-container');
// Función para mostrar los productos en la consola
function displayProducts(productsList) {
        
        mainContainer.innerHTML = '';

        if (productsList.length === 0) {
            mainContainer.innerHTML = '<div class="no-results">No se encontraron productos que coincidan con tu búsqueda</div>';
            return;
        }
        productsList.forEach((product) => {
        const productToappend = document.createElement('div');
        const productToappendImgContainer = document.createElement('div');
        const productToappendImg = document.createElement('img');
        const productToappendText = document.createElement('div');
        const productToappendH3 = document.createElement('h3');
        const productToappendH4 = document.createElement('h4');
        const productToappendspan = document.createElement('span');
        productToappend.className = 'container-product';
        productToappend.id = product.name;
        productToappendImgContainer.className = 'product-img-container';
        productToappendText.className = 'product-text';
        productToappendH3.className = 'product-name';
        productToappendH4.className = 'product-price';
        productToappendspan.className = 'price';
        productToappendImg.src = product.source;
        productToappendH3.textContent = product.name;
        productToappendH4.textContent = 'precio: ',
        productToappendspan.textContent = `${product.price}$`;
        
        productToappendImgContainer.appendChild(productToappendImg);
        productToappend.appendChild(productToappendImgContainer);
        productToappendH4.appendChild(productToappendspan);
        productToappendText.appendChild(productToappendH3);
        productToappendText.appendChild(productToappendH4);
        productToappend.appendChild(productToappendText);
        
        mainContainer.appendChild(productToappend);
    });
}
const searchInput = document.getElementById('search-input');

function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm ==='') {return;}

    const filteredInstruments = surgicalInstruments.filter(product =>{
        const productName = product.name.toLowerCase();
        return productName.includes(searchTerm);
    });
    displayProducts(filteredInstruments);
}

searchInput.addEventListener('input', filterProducts);

displayProducts(surgicalInstruments);
