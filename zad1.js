const categories = document.querySelectorAll('#categories .item'); 
                console.log("Liczba kategorii:" + categories.length);
                document.querySelectorAll('ul#categories li.item').forEach(category => {
                    const header = category.querySelector('h2').textContent;
                    const itemCount = category.querySelectorAll('li').length;
                    console.log(`${header} - ${itemCount}`);
                });