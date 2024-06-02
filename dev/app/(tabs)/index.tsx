import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,ScrollView ,Image, FlatList} from 'react-native';

const categories = [
  {
    title: 'Exercise',
    tasks: 1,
    image: require('../../assets/images/execise_icon.png'), // Replace with your actual image path
  },
  {
    title: 'Study',
    tasks: 2,
    image: require('../../assets/images/study_icon.png'), // Replace with your actual image path
  },
  {
    title: 'Cook',
    tasks: 3,
    image: require('../../assets/images/study_icon.png'), // Replace with your actual image path
  },
  {
    title: 'Code',
    tasks: 4,
    image: require('../../assets/images/study_icon.png'), // Replace with your actual image path
  },
  {
    title: 'teach',
    tasks: 5,
    image: require('../../assets/images/study_icon.png'), // Replace with your actual image path
  },
  {
    title: 'eat',
    tasks: 6,
    image: require('../../assets/images/study_icon.png'), // Replace with your actual image path
  },
  {
    title: 'Pray',
    tasks: 7,
    image: require('../../assets/images/study_icon.png'), // Replace with your actual image path
  },
  {
    title: 'Play',
    tasks: 8,
    image: require('../../assets/images/study_icon.png'), // Replace with your actual image path
  },

];

const ongoingTasks = [
  {
    title: 'Mobile App Development',
  },
  {
    title: 'Web Development',
  },
  {
    title: 'Data Science',
  },
  {
    title: 'cybersecurity',
  },
  {
    title: 'Data analytics',
  },
  {
    title: 'UI/ UX Design',
  },
  {
    title: 'System Analyst',
  },
  {
    title: 'Network Administration',
  },
  {
    title: 'Artificial Intelligence',
  },
  {
    title: 'Database Administration',
  },
  {
    title: 'IT Project Management',
  },
  {
    title: 'Cloud Architecture',
  },
  {
    title: 'Machine learning Administration',
  },
  {
    title: 'DevOPs engineering',
  },

  {
    title: 'Computer Systems Analyst',
  }
];


export default function App() {
  return (
    
       <View style={styles.container}>
       <View style={styles.headerContainer}>
       <Text style={styles.heading}>Hello , Devs</Text>
       <Image source={require('../../assets/images/user_profile.png')} style={styles.profilePic} /> 
       </View>
     <Text style={styles.taskCount}>14 tasks today</Text>

      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search" // Set the placeholder text
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.filterButton}>
        <Image source={require('../../assets/images/filter.png')} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      {/* Categories Section */}
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesHeading}>Categories</Text>
        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false} 
          style={styles.categoriesGrid}
          contentContainerStyle={{ justifyContent: 'center' }} // Apply layout here
        >
          {categories.map((category, index) => (
            <View key={index} style={styles.categoryCard}>
          
              <Text style={styles.categoryTitle}>{category.title}</Text>
              <Text style={styles.categoryTasks}>{category.tasks} Tasks</Text>
              <Image source={category.image} style={styles.categoryImage} />
            </View>
          ))}
        </ScrollView>
      </View>
   
      <View style={styles.ongoingTasksContainer}>
  <Text style={styles.ongoingTasksHeading}>Ongoing Task</Text>
  <ScrollView vertical={true} style={styles.ongoingTasksScroll}> 
    {ongoingTasks.map((task, index) => (
      <View key={index} style={[styles.ongoingTaskItem, styles.biggerTask, styles.leftAligned, styles.verticallyCentered]}> 
        <Text style={
          task.title === 'Mobile App Development' ||
          task.title === 'Web Development' ||
          task.title === 'Push ups' 
            ? [styles.ongoingTaskTitle, styles.centeredText] 
            : styles.ongoingTaskTitle
        }>
          {task.title}
        </Text>
      </View>
    ))}
  </ScrollView>
</View>
    </View>

   
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    padding: 20,
    paddingTop: 70,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align profile pic to the right
    alignItems: 'center',
    marginBottom: 10,
  },
  heading: {
    fontSize: 39,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  taskCount: {
    fontSize: 18,
    marginBottom: 40,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  filterButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  
  filterButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  categoriesContainer: { 
    marginBottom: 20,
  },
  categoriesHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoriesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap', 
    paddingHorizontal: 10
  },
  categoryCard: {
    width: '18%', 
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    elevation: 3, 
    marginBottom: 10,
    height:150,
    marginRight: 10,
  },
  categoryImage: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  categoryTasks: {
    fontSize: 14,
    color: '#888',
  },
  ongoingTasksContainer: {
    marginBottom: 20,
  },
  ongoingTasksHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 13,
    marginTop:3,
  },
  ongoingTaskItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'flex-start', 
    justifyContent: 'center', 
  
  },
  leftAligned: {
    alignItems: 'flex-start', 
  },
  verticallyCentered: {
    justifyContent: 'center', 
  },
  centeredText: {
    textAlign: 'center',
  },
  ongoingTaskTitle: {
    fontSize: 16,
    color: '#333',
  },
  biggerTask: {
    height: 120, 
  },
  categoriesGrid: {
    flexDirection: 'row', 
    marginBottom: 20,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
   
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  
});