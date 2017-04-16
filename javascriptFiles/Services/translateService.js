app.factory('translateFactory', function () {
    return {

        /*
         * @param {{string}}-text get the type from checkbox and translate it in greek language
         */

        translateEnglishToGreek: function (text) {
            if (text === "accounting") {
                text = "Λογιστήρια"
            } else if (text === "locality") {
                text = "Αστικό Κέντρο"
            } else if (text === "country") {
                text = "Χώρα"
            } else if (text === "establishment") {
                text = "Ίδρύματα"
            } else if (text === "point_of_interest") {
                text = "Κέντρα Ενδιαφέροντος"
            } else if (text === "political") {
                text = "Πολιτικές Τοποθεσίες"
            } else if (text === "post_box") {
                text = "Ταχυδρομικές Θυρίδες"
            } else if (text === "premise") {
                text = "Εγκαταστάσεις"
            } else if (text === "room") {
                text = "Δωμάτια"
            } else if (text === "route") {
                text = "Διαδρομές"
            } else if (text === "neighborhood") {
                text = "Γειτονιές"
            } else if (text === "natural_feature") {
                text = "Φυσικά Τοπία"
            } else if (text === "intersection") {
                text = "Σταυροδρόμια"
            } else if (text === "colloquial_area") {
                text = "Πλατείες"
            } else if (text === "food") {
                text = "Φαγητά"
            } else if (text === "health") {
                text = "Κέντρα Υγείας"
            } else if (text === "floor") {
                text = "Πλακόστρωτα"
            } else if (text === "geocode") {
                text = "Σοκάκια"
            } else if (text === "finance") {
                text = "Οικονομικά Κέντρα"
            } else if (text === "grocery_or_supermarket") {
                text = "Super Markets"
            } else if (text === "address") {
                text = "Κεντρικές Οδοί"
            } else if (text === "sublocality") {
                text = "Tοποθεσία"
            } else if (text === "postal_code") {
                text = "Ταχυδρομικός Κώδικας"
            } else if (text === "cities") {
                text = "Πόλεις"
            } else if (text === "amusement_park") {
                text = "Λούνα πάρκ"
            } else if (text === "aquarium") {
                text = "Ενυδρείο"
            } else if (text === "art_gallery") {
                text = "Γκαλερί"
            } else if (text === "atm") {
                text = "ΑΤΜ"
            } else if (text == "bakery") {
                text = "Φούρνοι"
            } else if (text === "bank") {
                text = "Τράπεζες"
            } else if (text === "bar") {
                text = "Μπαρ"
            } else if (text === "beauty_salon") {
                text = "Κέντρα Ομορφιάς"
            } else if (text === "bicycle_store") {
                text = "Καταστήματα Ποδηλάτων"
            } else if (text === "book_store") {
                text = "Βιβλιοπωλείο"
            } else if (text === "bowling_alley") {
                text = "Bowling"
            } else if (text === "bus_station") {
                text = "Στάσεις Λεωφορείων"
            } else if (text === "cafe") {
                text = "Καφετέριες"
            } else if (text === "store") {
                text = "Mini Markets"
            } else if (text === "campground") {
                text = "Xώρος Kατασκήνωσης"
            } else if (text === "car_dealer") {
                text = "Πωλητές Αυτοκινήτων"
            } else if (text === "car_repair") {
                text = "Επισκευή Αυτοκινήτου"
            } else if (text === "car_wash") {
                text = "Πλυντήρια Αυτοκινήτων"
            } else if (text == "casino") {
                text = "Καζίνο"
            } else if (text === "cemetery") {
                text = "Νεκροταφεία"
            } else if (text === "church") {
                text = "Εκκλησίες"
            } else if (text === "city_hall") {
                text = "Δημαρχεία"
            } else if (text === "clothing_store") {
                text = "Kατάστήματα Ρούχων"
            } else if (text === "convenience_store") {
                text = "Παντοπωλεία"
            } else if (text === "courthouse") {
                text = "Δικαστήριο"
            } else if (text === "dentist") {
                text = "Oδοντιατρεία"
            } else if (text === "department_store") {
                text = "Πολυκαταστήματα"
            } else if (text === "doctor") {
                text = "Ιατρεία"
            } else if (text === "electrician") {
                text = "Ηλεκτρολόγοι"
            } else if (text === "electronics_store") {
                text = "Kαταστήματα Ηλεκτρονικών"
            } else if (text === "embassy") {
                text = "Πρεσβείες"
            } else if (text === "fire_station") {
                text = "Πυροσβεστική"
            } else if (text === "florist") {
                text = "Ανθοπωλεία"
            } else if (text === "funeral_home") {
                text = "Γραφεία Κηδειών"
            } else if (text === "furniture_store") {
                text = "Καταστήματα Επίπλων"
            } else if (text === "gas_station") {
                text = "Βενζινάδικο"
            } else if (text === "gym") {
                text = "Γυμναστήρια"
            } else if (text === "hair_care") {
                text = "Κομμωτήρια"
            } else if (text === "hardware_store") {
                text = "Καταστήματα Λογισμικού"
            } else if (text === "hindu_temple") {
                text = "Ινδουιστικοί Ναοί"
            } else if (text === "home_goods_store") {
                text = "Καταστήματα Οικοιακών"
            } else if (text === "hospital") {
                text = "Νοσοκομεία"
            } else if (text === "insurance_agency") {
                text = "Ασφαλιστικά Γραφεία"
            } else if (text === "jewelry_store") {
                text = "Κοσμηματοπωλεία"
            } else if (text == "laundry") {
                text = "Πλυντήρια"
            } else if (text === "lawyer") {
                text == "Δικηγορικά Γραφεία"
            } else if (text === "library") {
                text = "Βιβλιοθήκες"
            } else if (text === "liquor_store") {
                text = "Κάβες Ποτών"
            } else if (text === "local_government_office") {
                text = "Γραφεία Κυνερνήσεως"
            } else if (text === "locksmith") {
                text = "Κλειδαράς"
            } else if (text === "lodging") {
                text = "Καταλύματα"
            } else if (text === "meal_delivery") {
                text = "Kαταστήματα Delivery"
            } else if (text === "meal_takeaway") {
                text = "Fast Food"
            } else if (text === "mosque") {
                text = "Τζαμιά"
            } else if (text === "movie_rental") {
                text = "DVD Club"
            } else if (text === "movie_theater") {
                text = "Cinema"
            } else if (text === "moving_company") {
                text = "Κινηματογραφικές Εταιρείες"
            } else if (text === "museum") {
                text = "Μουσεία"
            } else if (text === "night_club") {
                text = "Νυχτερινά Club"
            } else if (text === "painter") {
                text = "Βαφεία"
            } else if (text === "park") {
                text = "Πάρκα"
            } else if (text === "parking") {
                text = "Χώροι Στάθμευσης"
            } else if (text === "pet_store") {
                text = "Pet Shop"
            } else if (text === "pharmacy") {
                text = "Φαρμακεία"
            } else if (text === "physiotherapist") {
                text = "Φυσικοθεραπευτήρια"
            } else if (text === "plumber") {
                text = "Καταστήματα Υδραυληκών"
            } else if (text === "police") {
                text = "Αστυνομικό Τμήμα"
            } else if (text === "post_office") {
                text == "Ταχυδρομεία"
            } else if (text === "real_estate_agency") {
                text = "Μεσιτικά Γραφείά"
            } else if (text === "restaurant") {
                text = "Εστιατόρια"
            } else if (text === "roofing_contractor") {
                text = "Στέγες Φροντίδας"
            } else if (text === "rv_park") {
                text = "Τροχόσπιτα"
            } else if (text === "school") {
                text = "Σχολεία"
            } else if (text === "shoe_store") {
                text = "Καταστήματα Παπουτσιών"
            } else if (text === "shopping_mall") {
                text = "Εμπορικά Κένρα"
            } else if (text === "spa") {
                text = "Καταστήματα Spa"
            } else if (text === "stadium") {
                text = "Στάδια"
            } else if (text === "storage") {
                text = "Χώροι Αποθήκευσης"
            } else if (text === "subway_station") {
                text = "Σταθμοί Μετρό"
            } else if (text === "synagogue") {
                text = "Χώροι Συνάθρησης"
            } else if (text === "taxi_stand") {
                text = "Πιάτσες Ταξί"
            } else if (text === "train_station") {
                text = "Στάσεις Τρένων"
            } else if (text === "transit_station") {
                text = "Διαμετακομιστικοί Σταθμοί"
            } else if (text === "travel_agency") {
                text = "Tαξιδιωτικά Πρακτορεία"
            } else if (text === "university") {
                text = "Πανεπιστήμια"
            } else if (text === "veterinary_care") {
                text = "Κτηνιατρική Φροντίδα"
            } else if (text === "zoo") {
                text = "Ζωολογικοί Κήποι"
            } else {
                text = "Απροσδιόριστος Τύπος"
            }

            return text;
        },

        translateGreeksToEnglish: function (text) {


            if (text === "Λογιστήρια") {
                text = "accounting"

            } else if (text === "Αστικό Κέντρο") {
                text = "locality"
            } else if (text === "Χώρα") {
                text = "country"

            } else if (text === "Ίδρύματα") {
                text = "establishment"

            } else if (text === "Κέντρα Ενδιαφέροντος") {
                text = "point_of_interest"

            } else if (text === "Πολιτικές Τοποθεσίες") {
                text = "political"

            } else if (text === "Ταχυδρομικές Θυρίδες") {
                text = "post_box"

            } else if (text === "Εγκαταστάσεις") {
                text = "premise"

            } else if (text === "Δωμάτια") {
                text = "room"

            } else if (text === "Διαδρομές") {
                text = "route"

            } else if (text === "Γειτονιές") {
                text = "neighborhood"


            } else if (text === "Φυσικά Τοπία") {
                text = "natural_feature"

            } else if (text === "Σταυροδρόμια") {
                text = "intersection"

            } else if (text === "Πλατείες") {
                text = "colloquial_area"

            } else if (text === "Φαγητά") {
                text = "food"

            } else if (text === "Κέντρα Υγείας") {
                text = "health"

            } else if (text === "Πλακόστρωτα") {
                text = "floor"

            } else if (text === "Σοκάκια") {
                text = "geocode"

            } else if (text === "Οικονομικά Κέντρα") {
                text = "finance"

            } else if (text === "Super Markets") {
                text = "grocery_or_supermarket"

            } else if (text === "Κεντρικές Οδοί") {
                text = "address"

            } else if (text === "Tοποθεσία") {
                text = "sublocality"

            } else if (text === "Ταχυδρομικός Κώδικας") {
                text = "postal_code"

            } else if (text === "Πόλεις") {
                text = "cities"

            } else if (text === "Λούνα πάρκ") {
                text = "amusement_park"

            } else if (text === "Ενυδρείο") {
                text = "aquarium"

            } else if (text === "Γκαλερί") {
                text = "art_gallery"

            } else if (text === "ΑΤΜ") {
                text = "atm"

            } else if (text === "Φούρνοι") {
                text = "bakery"

            } else if (text === "Τράπεζες") {
                text = "bank"

            } else if (text === "Μπαρ") {
                text = "bar"

            } else if (text === "Κέντρα Ομορφιάς") {
                text = "beauty_salon"

            } else if (text === "Καταστήματα Ποδηλάτων") {
                text = "bicycle_store"

            } else if (text === "Βιβλιοπωλείο") {
                text = "book_store"

            } else if (text === "Bowling") {
                text = "bowling_alley"

            } else if (text === "Στάσεις Λεωφορείων") {
                text = "bus_station"

            } else if (text === "Καφετέριες") {
                text = "cafe"

            } else if (text === "Mini Markets") {
                text = "store"

            } else if (text === "Xώρος Kατασκήνωσης") {
                text = "campground"

            } else if (text === "Πωλητές Αυτοκινήτων") {
                text = "car_dealer"

            } else if (text === "Επισκευή Αυτοκινήτου") {
                text = "car_repair"

            } else if (text === "Πλυντήρια Αυτοκινήτων") {
                text = "car_wash"

            } else if (text == "Καζίνο") {
                text = "casino"

            } else if (text === "Νεκροταφεία") {
                text = "cemetery"

            } else if (text === "Εκκλησίες") {
                text = "church"

            } else if (text === "Δημαρχεία") {
                text = "city_hall"

            } else if (text === "Kατάστήματα Ρούχων") {
                text = "clothing_store"

            } else if (text === "Παντοπωλεία") {
                text = "convenience_store"

            } else if (text === "Δικαστήριο") {
                text = "courthouse"

            } else if (text === "Oδοντιατρεία") {
                text = "dentist"

            } else if (text === "Πολυκαταστήματα") {
                text = "department_store"

            } else if (text === "Ιατρεία") {
                text = "doctor"

            } else if (text === "Ηλεκτρολόγοι") {
                text = "electrician"

            } else if (text === "Kαταστήματα Ηλεκτρονικών") {
                text = "electronics_store"

            } else if (text === "Πρεσβείες") {
                text = "embassy"

            } else if (text === "Πυροσβεστική") {
                text = "fire_station"

            } else if (text === "Ανθοπωλεία") {
                text = "florist"

            } else if (text === "Γραφεία Κηδειών") {
                text = "funeral_home"

            } else if (text === "Καταστήματα Επίπλων") {
                text = "furniture_store"

            } else if (text === "Βενζινάδικο") {
                text = "gas_station"

            } else if (text === "Γυμναστήρια") {
                text = "gym"

            } else if (text === "Κομμωτήρια") {
                text = "hair_care"

            } else if (text === "Καταστήματα Λογισμικού") {
                text = "hardware_store"

            } else if (text === "Ινδουιστικοί Ναοί") {
                text = "hindu_temple"

            } else if (text === "Καταστήματα Οικοιακών") {
                text = "home_goods_store"

            } else if (text === "Νοσοκομεία") {
                text = "hospital"

            } else if (text === "Ασφαλιστικά Γραφεία") {
                text = "insurance_agency"

            } else if (text === "Κοσμηματοπωλεία") {
                text = "jewelry_store"

            } else if (text == "Πλυντήρια") {
                text = "laundry"

            } else if (text === "Δικηγορικά Γραφεία") {
                text == "lawyer"

            } else if (text === "Βιβλιοθήκες") {
                text = "library"

            } else if (text === "Κάβες Ποτών") {
                text = "liquor_store"

            } else if (text === "Γραφεία Κυνερνήσεως") {
                text = "local_government_office"

            } else if (text === "Κλειδαράς") {
                text = "locksmith"

            } else if (text === "Καταλύματα") {
                text = "lodging"

            } else if (text === "Kαταστήματα Delivery") {
                text = "meal_delivery"

            } else if (text === "Fast Food") {
                text = "meal_takeaway"

            } else if (text === "Τζαμιά") {
                text = "mosque"

            } else if (text === "DVD Club") {
                text = "movie_rental"

            } else if (text === "Cinema") {
                text = "movie_theater"

            } else if (text === "Κινηματογραφικές Εταιρείες") {
                text = "moving_company"

            } else if (text === "Μουσεία") {
                text = "museum"

            } else if (text === "Νυχτερινά Club") {
                text = "night_club"

            } else if (text === "Βαφεία") {
                text = "painter"

            } else if (text === "Πάρκα") {
                text = "park"

            } else if (text === "Χώροι Στάθμευσης") {
                text = "parking"

            } else if (text === "Pet Shop") {
                text = "pet_store"

            } else if (text === "Φαρμακεία") {
                text = "pharmacy"

            } else if (text === "Φυσικοθεραπευτήρια") {
                text = "physiotherapist"

            } else if (text === "Καταστήματα Υδραυληκών") {
                text = "plumber"

            } else if (text === "Αστυνομικό Τμήμα") {
                text = "police"

            } else if (text === "Ταχυδρομεία") {
                text == "post_office"

            } else if (text === "Μεσιτικά Γραφείά") {
                text = "real_estate_agency"

            } else if (text === "Εστιατόρια") {
                text = "restaurant"

            } else if (text === "Στέγες Φροντίδας") {
                text = "roofing_contractor"

            } else if (text === "Τροχόσπιτα") {
                text = "rv_park"

            } else if (text === "Σχολεία") {
                text = "school"

            } else if (text === "Καταστήματα Παπουτσιών") {
                text = "shoe_store"

            } else if (text === "Εμπορικά Κένρα") {
                text = "shopping_mall"

            } else if (text === "Καταστήματα Spa") {
                text = "spa"

            } else if (text === "Στάδια") {
                text = "stadium"

            } else if (text === "Χώροι Αποθήκευσης") {
                text = "storage"

            } else if (text === "Σταθμοί Μετρό") {
                text = "subway_station"

            } else if (text === "Χώροι Συνάθρησης") {
                text = "synagogue"

            } else if (text === "Πιάτσες Ταξί") {
                text = "taxi_stand"

            } else if (text === "Στάσεις Τρένων") {
                text = "train_station"

            } else if (text === "Διαμετακομιστικοί Σταθμοί") {
                text = "transit_station"

            } else if (text === "Tαξιδιωτικά Πρακτορεία") {
                text = "travel_agency"

            } else if (text === "Πανεπιστήμια") {
                text = "university"

            } else if (text === "Κτηνιατρική Φροντίδα") {
                text = "veterinary_care"

            } else if (text === "Ζωολογικοί Κήποι") {
                text = "zoo"

            } else {
                text = "Απροσδιόριστος Τύπος"
            }

            return text;


        }
    }
});