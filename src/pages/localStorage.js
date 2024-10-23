useEffect(() => {
    // Vérifier si les données sont déjà stockées dans le localStorage
    const storedProperties = localStorage.getItem('properties');
    if (storedProperties) {
      setProperties(JSON.parse(storedProperties));
    } else {
      // Si pas de données stockées, faire un appel API
      fetch('http://localhost:8080/api/properties')
        .then(response => response.json())
        .then(data => {
          setProperties(data);
          localStorage.setItem('properties', JSON.stringify(data)); // Sauvegarder dans localStorage
        })
        .catch(error => console.error('Erreur lors de la récupération des données :', error));
    }
  }, []);
  