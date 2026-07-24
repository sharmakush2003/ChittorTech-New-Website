<!-- header -->
<?php include 'header.php'; ?>
<!-- header -->

 
<style>
.new-blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin: 40px auto;
  max-width: 1200px;
  justify-content: center;
  padding: 0 20px;
}

.new-blog-card {
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.new-blog-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
}

.new-blog-content {
  padding: 22px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.new-blog-content h3 {
  font-size: 24px;
  margin-bottom: 12px;
  color: #1a1a1a;
  font-weight: 700;
}

.new-blog-content p {
  font-size: 16px;
  color: #444;
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 20px;
}

.new-read-more-btn {
  margin-top: auto;
  align-self: flex-start;
  background: linear-gradient(135deg, #0ca678, #089f6d);
  color: #fff;
  padding: 10px 22px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.new-read-more-btn:hover {
  opacity: 0.85;
}

@media (max-width: 768px) {
  .new-blog-content h3 {
    font-size: 20px;
  }
  .new-blog-content p {
    font-size: 14px;
  }
  .new-read-more-btn {
    padding: 8px 18px;
    font-size: 14px;
  }
}
</style>
<?php
include 'db.php';
include 'fetch_meta.php';
 
$sql = "SELECT id, main_title, main_image, slug, main_paragraph FROM blog_master ORDER BY id DESC";
$rs = $conn ? $conn->query($sql) : false;
?>

<div class="new-blog-grid">
  <?php if ($rs) { while($row = $rs->fetch_assoc()) { ?>
   <div class="new-blog-card">
  <?php if (!empty($row['main_image'])) { ?>
    <img src="/website_login/admin/uploads_img/<?php echo htmlspecialchars($row['main_image']); ?>" 
         alt="<?php echo htmlspecialchars($row['main_title']); ?>" 
         style="width:100%; height:220px; object-fit:cover; border-top-left-radius:18px; border-top-right-radius:18px;">
  <?php } ?>

  <div class="new-blog-content">
    <h3><?php echo htmlspecialchars($row['main_title']); ?></h3>
    <p>
      <?php echo substr(strip_tags($row['main_paragraph']), 0, 150); ?>...
    </p>
    <a href="<?php echo urlencode($row['slug']); ?>" class="new-read-more-btn">Read More</a>
  </div>
</div>

  <?php } } else { echo "<p>Unable to load blogs at the moment.</p>"; } ?>
</div>

<!--  footer -->
<?php include 'footer.php'; ?>