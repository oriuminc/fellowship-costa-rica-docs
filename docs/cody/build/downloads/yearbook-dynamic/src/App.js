import React from 'react';
import Header from './Header';
import FeatureCard from './CardFeatured';
import Card from './Card';
import featuredStudent from './featuredStudent.json';
import students from './students.json';

function App() {
  console.log(students);
  return (
    <div className="App bg">
      <Header />
      <div className="wrap">
        {featuredStudent && (
          <FeatureCard 
            name={featuredStudent.name}
            role={featuredStudent.role} 
            degree={featuredStudent.degree}
            quote={featuredStudent.quote}
          />
        )}
        <div className="flex cardWrap jus-between wrap">
          {students && students.map(student => (
            <Card 
              name={student.name}
              degree={student.degree}
              quote={student.quote}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
